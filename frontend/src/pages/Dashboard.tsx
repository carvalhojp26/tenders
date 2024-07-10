import Navbar from '../components/Navbar.tsx'
import Search from '../components/Search.tsx'
import { useCountry } from '../contexts/CountryContext.tsx';

export default function Dashboard () {
    const { country } = useCountry()

    return (
        <div className='ml-[320px] mt-8'>
            <div className='mb-4 pl-4'>
                <Navbar pageName='Dashboard' section='Statistics'/>
            </div>
            <Search country={country}/>
        </div>
    )
}