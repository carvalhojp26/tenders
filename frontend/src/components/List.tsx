import Table from './Table'
import Pagination from './Pagination'
import SmallCard from './SmallCard.tsx'
import { MdAttachMoney } from "react-icons/md";
import MediumCard from './MediumCard.tsx'
import XSmallCard from './XSmallCard.tsx';
import { useState } from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { PiProhibit } from "react-icons/pi";
import { TbListNumbers } from "react-icons/tb";
import { MdCategory } from "react-icons/md";

interface ListProps {
    tenders: {
        title?: string;
        date?: string;
        deadline?: string;
        deadlineLength?: number;
        category?: string;
        srcURL?: string;
        supplier?: string;
        value?: string;
    }[]
    currentPage: number;
    onPageChange: (page: number) => void
    error: string
    loading: boolean
}

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

export default function List ({tenders, currentPage, onPageChange, error, loading}: ListProps) {
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [selectedTender, setSelectedTender] = useState<Tender | null>(null)

    const tendersPerPage = 10

    const indexOfLastTender = currentPage * tendersPerPage
    const indexOfFirstTender = indexOfLastTender - tendersPerPage
    const currentTenders = tenders.slice(indexOfFirstTender, indexOfLastTender)

    const pageCount = Math.ceil(tenders.length / tendersPerPage)

    const handleClick = (boolean:boolean, tender: (Tender | null)) => {
        setIsClicked(boolean)
        setSelectedTender(tender)
    }

    console.log(isClicked)

    return (
        <div>
            <Table tenders={currentTenders} error={error} loading={loading} handleClick={handleClick} />
            <Pagination pageCount={pageCount} currentPage={currentPage} onPageChange={onPageChange} />
            {isClicked && selectedTender ?  (
                <div className='flex'>
                    <div className='flex flex-col'>
                        <SmallCard icon={<MdAttachMoney size='25' style={{ color: 'white' }} />} title='Price' content={selectedTender.value || '$ 0'} />
                        <SmallCard icon={<CiCalendarDate size='25' style={{ color: 'white' }} />} title='Date' content={selectedTender.date || 'unknown'} />
                    </div>
                    <MediumCard />
                    <div className='flex flex-col'>
                        <SmallCard icon={<PiProhibit size='25' style={{ color: 'white' }} />} title='Deadline' content={selectedTender.deadline || 'unknown'} />
                        <SmallCard icon={<TbListNumbers size='25' style={{ color: 'white' }} />} title='Deadline length' content={selectedTender.deadlineLength || 'unknown'} />
                    </div>
                    <div className='flex flex-col'>
                        <SmallCard icon={<MdCategory size='25' style={{ color: 'white' }} />} title='Category' content={selectedTender.category || 'unknown'} />
                        <div className='flex flex-col'>
                            <XSmallCard />
                            <XSmallCard />
                        </div>
                    </div>
                </div>
            ) : (
                <div></div> 
            )}
        </div>
    );
}