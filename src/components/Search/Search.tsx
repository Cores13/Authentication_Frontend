import './Search.scss';

import searchIcon from '../../assets/images/icons/search.png';
import { useEffect, useRef } from 'react';


const Search = ( {props, onSearch, resetSelection}:any ) => {

    const input: any = useRef<HTMLInputElement>();

    const handleChange = () => {
        let val = input.current.value;
        // remove whitespace from both sides if not an empty string
        if(val.trim() !== ''){
            const cleared = input.current.value.replace(/^\s+|\s+$/gm,'');
            onSearch('search', cleared);
        } else {
            onSearch('search', '');
        }
    }

    useEffect(() => {
        input.current.value = '';
    }, [resetSelection])


    

    return (
        <div className='searchWrapper'>
            <img src={searchIcon} />
            <input ref={input} type='text' onChange={() => handleChange()} placeholder='Search' />
        </div>
    )
}

export default Search