export default function SingleExperience({ year, title, description, type }: IProps) {
    return (
        <div className={`flex items-center w-[90vw] lg:w-[75vw] my-4 rounded-md text-center border-[3px] ${type === 'education' ? 'border-green-300' : 'border-blue-500'}`}>
        
            <div className={`h-[100%] ${description.length === 24 && 'leading-[100px]'} ${description.length === 34 && 'leading-[125px]'} ${description.length === 48 && 'leading-[145px]'} sm:leading-[100px] w-[150px] border-r-[3px] ${type === 'education' ? 'border-green-300' : 'border-blue-500'}`}>
                <h3 className="font-medium">{year}</h3>
            </div>

            <div className="w-full p-4">
                <h3 className="text-xl font-medium mb-2">{title}</h3>
                <p>{description}</p>
            </div>

        </div>
    )
}

interface IProps {
    year: string
    title: string
    description: string
    type: string
}