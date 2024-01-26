import { ChangeEvent, useEffect, useRef } from "react";

import './Switch.scss';
import Input from "../Input/Input";
import useInput from "../../hooks/useInput";
import { UserStatusEnum } from "../../api";

interface SwitchProps {
    label: String
    id: any
    value?: any
    error?: boolean
    errorText?: string
    disabled?: boolean
    inputBind: any
    enumBind: any
}

const Switch = (({label, id, value, error, errorText, disabled, inputBind, enumBind}: SwitchProps) => {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {

    if(getAvailableOptions().length !== 2){
      throw new Error('Invalid enum provided for switch.')
    }

    if(inputBind.value === 0){
      inputBind.loadValue(getAvailableOptions()[1]);
    } else {
      if(inputBind.value === 1){
        if(inputRef.current) inputRef.current.checked = true;
      }
    }
  }, [inputBind])

  const getAvailableOptions = () => {
    return Object.keys(enumBind).filter((v) => !isNaN(Number(v)));
  }

  const handleChange = (event: any) => {
    const isSwitchOn = event.target.checked !== true;
    // if on, get first value else get second from enum
    const availableOptions = getAvailableOptions();
    const switchValue = isSwitchOn ? availableOptions[1] : availableOptions[0];
    inputBind.loadValue(switchValue);
  }

  return (
    <div className="switch-wrapper">
        <div className="title">
            {label}
        </div>

        <div className="switch-items">
          <div className="text-wrapper">
            {label} | {UserStatusEnum[inputBind.value]}
          </div>

          <label className="switch">
            <input
              ref={inputRef}
              type="checkbox"
              id={id}
              name={id}
              onChange={(e) => handleChange(e)}
              disabled={disabled}
            />
            <span className="slider"></span>
          </label>
        </div>

        {error && <p className="error">{errorText}</p>}
    </div>
  )
})

export default Switch