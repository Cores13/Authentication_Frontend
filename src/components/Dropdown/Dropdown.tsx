import React, { useEffect, useState } from 'react'

import './Dropdown.scss';

import arrowDown from '../../assets/images/icons/arrow-down.png';
import arrowUp from '../../assets/images/icons/arrow-up.png';

const Dropdown = ( {options, dropdownChanged, resetSelection}:any )=> {

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState<any>(null);

    const formattedDropdownOptions = () => {
        const filterItems = [];
        const optionSetKey = options.key;

        if(options.values){
            const availableOptions = options.values;
            for (const [key, value] of Object.entries(availableOptions)) {
                let selectedFilter: Record<string, any>= {};
                selectedFilter[optionSetKey] = value;
                let selectedString = `${optionSetKey}: ${key}`

                filterItems.push(<div className='dropdown-item' key={key} onClick={() => handleSelection(optionSetKey, value, selectedString)}>{optionSetKey}: {key}</div>)
            }
        }

        return filterItems;
    }



    const handleSelection = (filterKey: string, filterValue: any, selectedString: string) => {
        dropdownChanged(filterKey, filterValue);
        setSelectedFilter(selectedString);
        setIsDropdownOpen(false);
    }



    useEffect(() => {
        setSelectedFilter(null);
    }, [resetSelection])



    return (
        <div className='dropdown-wrapper'>
            <div className={`dropdown-box${isDropdownOpen ? ' no-bottom-border' : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                { selectedFilter ?
                    <p>{selectedFilter}</p> 
                    :
                    <p>Select {options.key.toLowerCase()}:</p>
                }
                <img src={(isDropdownOpen ? arrowUp : arrowDown)} alt='dropdown icon' />
            </div>
            <div className={`dropdown-content${isDropdownOpen ? ' open' : ''}`}>
                {formattedDropdownOptions()}
            </div>
        </div>
    )
}

export default Dropdown