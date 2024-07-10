interface cardProps {
    icon:JSX.Element,
    title: (string | null)
    content: (string | number | null)
}

export default function Card ( {icon, title, content}:cardProps) {
    return (
        <>
          <div className="border border-custom-gray w-full w-96 h-32 rounded-lg bg-white p-2 flex m-4">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mt-1">
              {icon}
            </div>
            <div className="flex-1 flex flex-col items-end mr-4">
              <h6 className="text-xl font-medium text-gray-600">{title}</h6>
              <h6 className="text-2xl font-semibold">{content}</h6>
            </div>
          </div>
        </>
    )
}