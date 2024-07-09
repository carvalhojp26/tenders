import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import List from './List';

interface SearchProps {
    country?: string;
}

interface Tender {
    title: string;
    date: string;
}

const Search: React.FC<SearchProps> = ({ country = 'defaultCountryCode' }) => {
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('No filter');
    const [date, setDate] = useState<string>('No filter');
    const [price, setPrice] = useState<string>('No filter');
    const [tenders, setTenders] = useState<Tender[]>([]);

    useEffect(() => {
        fetchTenders();
    }, []);

    const fetchTenders = async () => {
        const apiUrl = `http://localhost:3000/${country}`;
        try {
            const response = await axios.get(apiUrl);
            console.log(response.data)
            setTenders(response.data.map((tender: Tender) => ({
                title: tender.title,
                date: tender.date
            })));
        } catch (error) {
            console.error('Erro na busca inicial: ', error);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const apiUrl = `http://localhost:3000/${country}`;
        const params = {
            title: title || undefined,
            category: category !== 'No filter' ? category : undefined,
            date: date !== 'No filter' ? date : undefined,
            price: price !== 'No filter' ? price : undefined
        };

        try {
            const response = await axios.get(apiUrl, { params });
            setTenders(response.data.map((tender: Tender) => ({
                title: tender.title,
                date: tender.date
            })));
        } catch (error) {
            console.error("Erro ao filtrar dados:", error);
        }
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
            <List tenders={tenders}/>
        </>
    );
}

export default Search;
