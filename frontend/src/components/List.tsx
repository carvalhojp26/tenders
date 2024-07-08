import { useState } from 'react'

interface ListProps {
    tenders: {
        title: string,
        date: string
    }[]
}

export default function List ({tenders}:ListProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const tendersPerPage = 10

    const indexOfLastTender = currentPage * tendersPerPage
    const indexOfFirstTender = indexOfLastTender - tendersPerPage
    const currentTenders = tenders.slice(indexOfFirstTender)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const pageCount = Math.ceil(tenders.length / tendersPerPage)

    return (
        <div className='ml-4  w-[1540px] mt-8 rounded-xl border border-custom-gray overflow-hidden bg-white h-[640px]'>
            <table>
                <thead className='bg-gray-200 w-full h-10'>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTenders.map((tenders, index) => (
                        <tr key={index} className='h-10 border-b border-custom-gray'>
                            <td className='pl-4'>{tenders.title}</td>
                            <td className='pr-4'>{tenders.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className=''>
                {Array.from({length: pageCount}, (_, i) => i + 1).map(number => (
                    <button key={number} onClick={() => paginate(number)} className=''>
                        {number}
                    </button>
                ))}
            </div>
        </div>
    )
}