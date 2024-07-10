import '../css/Spinner.css'
import { useState } from 'react'

interface Tender {
    title?: string;
    date?: string;
    deadline?: string;
    deadlineLength?: number;
    category?: string;
    srcURL?: string;
    supplier?: string;
    value?: string;
}

interface TableProps {
    tenders: Tender[];
    error: string;
    loading: boolean;
    handleClick: (boolean: boolean, tender:(Tender | null)) => void;
    
}

export default function Table({ tenders, error, loading, handleClick }: TableProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const handleRowClick = (index: number, tender: Tender) => {
        setSelectedIndex(selectedIndex === index ? null : index)
        if(selectedIndex === index) {
            handleClick(false, null)
        } else {
            handleClick(true, tender)
        }
    }

    return (
        <div className='ml-4 w-[1540px] mt-8 rounded-xl border border-custom-gray overflow-hidden bg-white h-[600px]'>
            {loading ? (
                <div className="flex items-center justify-center h-full">
                    <div className='spinner'></div>
                </div>
            ) : error ? (
                <table className='w-full'>
                    <thead className='bg-custom-black text-white w-full h-10'>
                        <tr>
                            <th className='h-10 w-flex-1'>Title</th>
                            <th className='h-10 w-32'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} className="flex items-center justify-center text-2xl font-bold text-red-500 h-[520px]">
                                {error}
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <table className='w-full'>
                    <thead className='bg-custom-black text-white w-full h-10'>
                        <tr>
                            <th className='h-10 w-flex-1'>Title</th>
                            <th className='h-10 w-32'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tenders.length > 0 ? tenders.map((tender, index) => (
                            <tr key={index} className={`border-b border-custom-gray h-14 cursor-pointer ${selectedIndex === index ? 'bg-gray-300 transition duration-500' : 'bg-white'}`} onClick={() => handleRowClick(index, tender)}>
                                <td className='pl-4 flex flex-1 min-w-0 max-w-[1412px]'>
                                    <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{tender.title}</span>
                                </td>
                                <td className='pr-4 w-32 text-right'>{tender.date}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={2} className=" p-4 flex items-center justify-center text-2xl font-bold text-red-500 h-[520px]">
                                    No tenders matched
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}