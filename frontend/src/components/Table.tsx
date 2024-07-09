interface ListProps {
    tenders: {
        title: string,
        date: string
    }[]
}

export default function Table ({tenders}:ListProps) {
    return (
        <div className='ml-4 w-[1540px] mt-8 rounded-xl border border-custom-gray overflow-hidden bg-white h-[640px]'>
            <table className='w-full'>
                <thead className='bg-custom-black text-white w-full h-10'>
                    <tr>
                        <th className='h-10 w-flex-1'>Title</th>
                        <th className='h-10 w-32'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tenders.map((tenders, index) => (
                        <tr key={index} className='border-b border-custom-gray h-10'>
                            <td className='pl-4 flex flex-1 min-w-0 max-w-[1412px]'>
                                <span className='text-ellipsis overflow-hidden whitespace-nowrap'>{tenders.title}</span>
                            </td>
                            <td className='pr-4 w-32 text-right'>{tenders.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}