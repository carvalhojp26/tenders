import {useState, ChangeEvent } from 'react'

interface DropdownProps {
    label: string
    options: {label: string, value: string}[]
    onChange: (value: string) => void 
}

export default function Dropdown ({label, options, onChange}:DropdownProps) {
    const [selectedValue, setSelectedValue] = useState<string>('')

    function handleChange (event:ChangeEvent<HTMLSelectElement>) {
        setSelectedValue(event.target.value)
        onChange(event.target.value)
    }

    return (
        <div className='dropdown-container mr-4 '>
            <label className="block mb-2 text-gray-700 font-bold"> 
                {label}
            </label>
            <select 
                value={selectedValue} 
                onChange={handleChange} 
                className="w-36 h-12 rounded-xl p-4 bg-custom-black text-white font-semibold cursor-pointer block shadow-sm" 
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}