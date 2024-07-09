interface PaginationProps {
    pageCount: number;
    currentPage: number;
    onPageChange: (page: number) => void
}

export default function Pagination ({pageCount, currentPage, onPageChange}:PaginationProps) {
    const getPageNumbers = (): (number | string)[] => {
        const pages: (number | string)[] = [];
        
        if(pageCount <= 7) {
            for (let i=1; i<= pageCount; i++) (
                pages.push(i)
            )
        }
        else {
            const startPages = [1,2,3,4,5]
            const endPages = [pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount]

            if(currentPage < 6) {
                pages.push(...startPages, '...', pageCount)
            } else if (currentPage < pageCount - 2) {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', pageCount )
            }
            else (
                pages.push(1, '...', ...endPages)
            )
        }

        return pages
    }

    return (
        <div>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="font-semibold hover:bg-gray-300 transition duration-300 rounded-xl px-4 py-2 mx-1"
            >
                Previous 
            </button>
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 rounded mx-1 ${typeof page === 'number' && page === currentPage ? 'bg-custom-black text-white hover:shadow-2xl transition duration-300' : 'text-black hover:bg-gray-300 transition duration-300'}`}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    disabled={typeof page !== 'number'}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pageCount}
                className="font-semibold hover:bg-gray-300 transition duration-300 rounded-xl px-4 py-2 mx-1"
            >
                Next
            </button>
        </div>
    )
} 