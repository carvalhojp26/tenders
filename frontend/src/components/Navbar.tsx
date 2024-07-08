interface NavbarProps {
    pageName: string,
    section: string
}

export default function Navbar ( {pageName, section}:NavbarProps) {
    return (
        <> 
            <div>
                <h6 className="text-gray-400">Dashboard / <span className="text-black">{pageName}</span></h6>
                <h5 className="font-bold">{section}</h5>
            </div>
        </>
    )
}         