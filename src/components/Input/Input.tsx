import { ChangeEvent, DetailedHTMLProps, useEffect, useRef, useState } from "react";

import './Input.scss';
import eye from '../../assets/images/icons/eye.png';
import eyeHidden from '../../assets/images/icons/eye-hidden.png';

interface InputProps {
    label?: String
    id: any
    type: 'text' | 'number' | 'email' | 'password' | 'select' | 'checkbox',
    value: any
    error?: boolean
    errorText?: string
    disabled?: boolean
    hidden?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = (({label, id, type, value, error, errorText, disabled, hidden, onChange}: InputProps) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [inputType, setInputType] = useState(type);

    const changeType = () => {
        if(inputRef.current?.type === 'text') return setInputType('password');
        if(inputRef.current?.type === 'password') return setInputType('text');
    }

    const renderPasswordToggle = () => {
        if(inputType === 'password')return <img src={eyeHidden} className='pass' onClick={() => changeType()}/>
        if(inputType === 'text') return <img src={eye} className='pass' onClick={() => changeType()}/>
    }

    return (
        <div className={`input-wrapper ${hidden ? 'hidden' : ''}`}>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                ref={inputRef}
                type={inputType}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {type === 'password' && (renderPasswordToggle())}
            {error && <p className="error">{errorText}</p>}
        </div>
    )
});

export default Input;