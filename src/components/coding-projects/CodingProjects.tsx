import SingleCodingProject from "@/components/coding-projects/SingleCodingProject"
import codingProjects from '../../../data/codingProjects'

export default function CodingProjects() {
    return (
        <>
        <h2 className="text-center text-4xl font-semibold my-8 select-none mt-16">Coding Projects</h2>
        { codingProjects.map((project, index) => <SingleCodingProject key={index} {...project} />) }
        </>
    )
}

// md:flex-row
// md:flex-row-reverse