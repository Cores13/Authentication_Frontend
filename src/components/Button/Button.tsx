import { useEffect } from 'react';
import './Button.scss';
import { useNavigate } from 'react-router-dom';

const Button = ({props, buttonClass, onClick, linkTo, children}: any) => {

    const navigate = useNavigate();

    useEffect(() => {
        // console.log(props);
    }, [])

    const handleClick = () => {
        if(onClick) return onClick();
        if(linkTo) navigate(linkTo);
    }

    return (
        <div className={`action-button ${buttonClass ? buttonClass : ''}`} onClick={() => handleClick()}>{children}</div>
    )
}

export default Button