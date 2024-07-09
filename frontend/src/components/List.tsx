import { useState } from 'react'
import Table from './Table'
import Pagination from './Pagination'

interface ListProps {
    tenders: {
        title: string,
        date: string
    }[]
}

export default function List ({tenders}: ListProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const tendersPerPage = 15

    const indexOfLastTender = currentPage * tendersPerPage
    const indexOfFirstTender = indexOfLastTender - tendersPerPage
    const currentTenders = tenders.slice(indexOfFirstTender, indexOfLastTender)

    const pageCount = Math.ceil(tenders.length / tendersPerPage)

    function handlePageChange (page: number) {
        setCurrentPage(page)
    }

    return (
        <div>
            <Table tenders={currentTenders} />
            <Pagination pageCount={pageCount} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    );
}