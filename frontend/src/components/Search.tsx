import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import List from './List';

interface SearchProps {
    country?: string;
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

export default function Search({ country }: SearchProps) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('No filter');
    const [date, setDate] = useState('No filter');
    const [price, setPrice] = useState('No filter');
    const [tenders, setTenders] = useState<Tender[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [apiPage, setApiPage] = useState(0);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const newApiPage = Math.floor((currentPage - 1) / 10);
        if (newApiPage !== apiPage) {
            setApiPage(newApiPage);
            fetchTenders(newApiPage + 1);
        }
    }, [currentPage, apiPage]);

    useEffect(() => {
        fetchTenders(1);
    }, []);

    const fetchTenders = async (page: number) => {
        if(!country) {
            return setError('Please select a country')
        }

        setLoading(true)
        const apiUrl = `http://localhost:3000/${country}`;
        const params = {
            page,
            title: title || undefined,
            category: category !== 'No filter' ? category : undefined,
            date: date !== 'No filter' ? date : undefined,
            price: price !== 'No filter' ? price : undefined
        };

        try {
            const response = await axios.get(apiUrl, { params });
            setTenders(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError('No Results')
        }
        setLoading(false)
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchTenders(1);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='px-4 flex'>
                <div className='dropdown-container'>
                    <label className="block mb-2 text-gray-700 font-bold">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                        placeholder='Search for a tender'
                        className='w-[950px] h-12 rounded-xl p-4 block mr-4'
                    />
                </div>
                <Dropdown 
                    label='Category'
                    options={[
                        { label: 'No filter', value: 'No filter' },
                        { label: 'Constructions', value: 'constructions' },
                        { label: 'Services', value: 'services' },
                        { label: 'Supplies', value: 'supplies' },
                        { label: 'Other', value: 'other' }
                    ]}
                    onChange={setCategory}
                />
                <Dropdown 
                    label='Date'
                    options={[
                        { label: 'No filter', value: 'No filter' },
                        { label: 'Oldest', value: 'asc' },
                        { label: 'Newest', value: 'desc' }
                    ]}
                    onChange={setDate}
                />
                <Dropdown 
                    label='Price'
                    options={[
                        { label: 'No filter', value: 'No filter' },
                        { label: 'Lowest', value: 'asc' },
                        { label: 'Highest', value: 'desc' }
                    ]}
                    onChange={setPrice}
                />
                <div className='flex items-end'>
                    <button type="submit" className='w-24 h-12 font-semibold rounded-xl border-2 border-black hover:bg-custom-black trasition duration-300 hover:text-white'>Search</button>
                </div>
            </form>
            <List tenders={tenders} currentPage={currentPage} onPageChange={handlePageChange} error={error} loading={loading}/>
        </>
    );
}