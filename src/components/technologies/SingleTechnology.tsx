export default function SingleTechnology({ technology, color, shadow }: IProps) {
    return (
        <div className={`${color} h-[75px] w-[150px] flex justify-center items-center rounded-lg shadow-xl ${shadow}`}>
            <p className="text-white text-2xl">{technology}</p>
        </div>
    )
}

interface IProps {
    technology: string
    color: string
    shadow: string
}