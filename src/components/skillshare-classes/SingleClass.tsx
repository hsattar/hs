export default function SingleClass({ image, link, title, students }: IProps) {
    return (
        <div className="flex flex-col">
            <a href={link} target="_blank" rel="noreferrer">
            <img src={image} alt="" />
            <h5 className="text-center text-2xl font-medium my-2">{title}</h5>
            <p className="text-center">{students} students</p>
            </a>
        </div>
    )
}

interface IProps {
    image: string
    link: string
    title: string
    students: string
}