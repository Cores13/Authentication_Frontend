import { ChangeEvent, useState } from 'react'

const useInput = (initialValue: any, type: any) => {
  type Value = typeof type;

  const [value, setValue] = useState<Value>(initialValue)
  const [error, setError] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputType = e.target.type;
    if(inputType === 'checkbox'){
      setValue(e.target.checked);
    } else {
      setValue(e.target.value)
    }
  }

  const loadValue = (value: any) => {
    setValue(value);
  }

  return {
    value,
    error,
    onChange: handleChange,
    setError,
    loadValue
  }
}

export default useInput