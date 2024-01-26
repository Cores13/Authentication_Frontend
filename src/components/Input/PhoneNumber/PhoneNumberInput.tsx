
import './PhoneNumberInput.scss';

import 'react-phone-number-input/style.css'
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import { useEffect, useState } from 'react';

interface PhoneNumberProps {
    label: String
    id: any
    value?: any
    disabled?: boolean
    inputBind: any
    onChangeRegion?: any
}

const PhoneNumberInput = (({label, id, value, disabled, inputBind, onChangeRegion}: PhoneNumberProps) => {

    const [phoneNumber, setPhoneNumber] = useState<string>('');

    useEffect(() => {
        if(inputBind.value !== ''){
            setPhoneNumber(inputBind.value);
            const phoneNumberRegion = getRegionFromPhoneNumber(inputBind.value);
            if(phoneNumberRegion) onChangeRegion(phoneNumberRegion)
        }
    }, [inputBind])


    const getRegionFromPhoneNumber = (phoneNumber: string) => {
        const phoneNumberData = parsePhoneNumber(phoneNumber);
        if(phoneNumberData){
            if(phoneNumberData.country) return phoneNumberData.country;
        }
    }

    const handleChange = (value: any) => {
        if(value){
            const phoneNumberRegion = getRegionFromPhoneNumber(value);
            if(phoneNumberRegion) onChangeRegion(phoneNumberRegion)
        }
        
        inputBind.loadValue(value);
        setPhoneNumber(value);
    }

    return (
        <div className="phonenumber-wrapper">
            <label htmlFor={id}>{label}</label>
            <PhoneInput className='phoneinput-wrapper' placeholder="Enter phone number" value={phoneNumber} onChange={handleChange}/>
        </div>
    )
})

export default PhoneNumberInput