export default function SingleCodingProject({ image, link, title, subtitle, description, technologies, direction }: IProps) {
    return (
        <section className={`flex flex-col items-center ${direction} p-4 select-none`}>
            <a href={link} target="_blank" rel="noreferrer" className="flex justify-center items-center w-full md:w-[50%]">
                <img src={image} className="w-full px-3 lg:w-[75%]" alt=""/>
            </a>
            <div className="flex flex-grow flex-col justify-between items-center text-center py-8">
                <a href={link} target="_blank" rel="noreferrer">
                    <h4 className="text-center text-2xl font-medium">{title}</h4>
                    {/* <h5 className="mb-3">{subtitle}</h5> */}
                </a>
                <p className="mt-4 mb-2">{description}</p>
                <p className="text-sm text-gray-600">{technologies}</p>
            </div>
        </section>
    )
}

interface IProps {
    image: string
    link: string
    title: string
    subtitle: string
    description: string
    technologies: string
    direction: string
}