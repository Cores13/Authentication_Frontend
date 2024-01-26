import { ChangeEvent, useEffect, useRef, useState } from "react";

import './Select.scss';

import { RoleEnums } from "../../enums/Enums";

import arrowDown from '../../assets/images/icons/arrow-down.png';
import arrowUp from '../../assets/images/icons/arrow-up.png';
import useInput from "../../hooks/useInput";
import Input from "../Input/Input";

interface SelectProps {
    label: String
    id: any
    value?: any
    disabled?: boolean
    inputBind: any
}

const Select = (({label, id, value, disabled, inputBind}: SelectProps) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>('');
  const fakeInput = useInput(value, String);

  const handleSelection = (value: any) => {
    // console.log(value); 
    setSelectedOption(value);
    setIsDropdownOpen(false);
    inputBind.loadValue(value)
  }

  const renderSelectOptions = () => {
    const options = RoleEnums;
    let elements = [];
    for (const [key, value] of Object.entries(options)){
      if(typeof value === 'number'){
        elements.push(
          <div className="dropdown-item" key={key} onClick={() => handleSelection(value)}>{key}</div>
        )
      }
    }
    return elements;
  }

  useEffect(() => {
    if(inputBind.value){
      handleSelection(inputBind.value);
    }
  }, [inputBind])

  return (
    <div className="select-wrapper">
      
      <label htmlFor={id}>{label}</label>

      <Input type="text" hidden="hidden" id={id} {...fakeInput}/>

      <div className="select-dropdown">

        <div className={`dropdown-box${isDropdownOpen ? ' no-bottom-border' : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          { selectedOption ?
              <p>{RoleEnums[selectedOption]}</p> 
              :
              <p>Select {label}:</p>
          }
          <img src={(isDropdownOpen ? arrowUp : arrowDown)} alt='dropdown icon' />
        </div>

        <div className={`dropdown-content${isDropdownOpen ? ' open' : ''}`}>
          {renderSelectOptions()}
        </div>

      </div>
  </div>
  )
})

export default Select