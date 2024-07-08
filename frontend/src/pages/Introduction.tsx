import Navbar from '../components/Navbar.tsx'
import { useCountry } from '../contexts/CountryContext';
import { Link } from 'react-router-dom'

export default function Introduction() {
  const { setCountry } = useCountry();

    return (
        <>
            <div className='ml-80 pl-4 mt-8 text-md'>
                <Navbar pageName="Introduction" section='Introduction'/>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='mt-12 text-8xl font-semibold custom-font'>Info Tenders</h1>
                <h3 className='mt-8 text-xl'>Info Tenders is a website that allows to monitor public procurement processes in Hungary, Poland, Romania, and Spain.</h3>
                <img className='w-[800px] mt-8' src="https://tenders.guru/img/handshake.svg" alt="handshake image" />
            </div>
            <div>
                <h3 className='flex justify-center mt-8 text-xl'>Choose your country:</h3>
                <div className='flex justify-center mt-8'>
                    <div className='flex justify-center w-full max-w-[600px] '>
                        <Link to="/dashboard" onClick={() => setCountry('hu')} className='flex flex-col items-center'>
                            <img className='w-24 ml-4 mr-4' src="https://tenders.guru/img/hungary.svg" alt="Hungary" />
                            <p>Hungary</p>
                        </Link>
                        <Link to="/dashboard" onClick={() => setCountry('ro')} className='flex flex-col items-center'>
                            <img className='w-24 ml-4 mr-4' src="https://tenders.guru/img/romania.svg" alt="Romania" />
                            <p>Romania</p>
                        </Link>
                        <Link to="/dashboard" onClick={() => setCountry('pl')} className='flex flex-col items-center'>
                            <img className='w-24 ml-4 mr-4' src="https://tenders.guru/img/poland.svg" alt="Poland" />
                            <p>Poland</p>
                        </Link>
                        <Link to="/dashboard" onClick={() => setCountry('es')} className='flex flex-col items-center'>
                            <img className='w-24 ml-4 mr-4' src="https://tenders.guru/img/spain.svg" alt="Spain" />
                            <p>Spain</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}