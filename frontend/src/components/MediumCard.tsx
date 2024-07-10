import { useState, useEffect } from 'react'

interface CardProps {
    country?: (string | undefined)
} 

export default function MediumCard ({country}:CardProps) {
    const [url, setUrl] = useState<string>()

    useEffect(() => {
        handleCountry()
    }, [country])

    const handleCountry = () => {
        if(country === 'hu') {
            setUrl('https://tenders.guru/img/hungary.svg')
        } else if(country === 'pl') {
            setUrl('https://tenders.guru/img/poland.svg')
        } else if (country === 'ro') {
            setUrl('https://tenders.guru/img/romania.svg')
        } else if (country === 'es'){
            setUrl('https://tenders.guru/img/spain.svg')
        } else {
            setUrl('')
        }
    }

    return (
        <div className="h-[288px] bg-white w-[288px] mt-4 rounded-xl border border-custom-gray flex items-center justify-center">
            <img className='h-48' src={url} />
        </div>
    )
}