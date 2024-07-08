import Navbar from '../components/Navbar.tsx'
import Card from '../components/Card.tsx'
import { MdAttachMoney } from "react-icons/md";
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
            // <div className='flex'>
            //     <Card icon={<MdAttachMoney size='25' style={{ color: 'white' }}/>} title='Cost' content='$ 100000'/>
            // </div>