import SingleExperience from "./SingleExperience"
import experiences from '../../../data/experiences'

export default function Experiences() {
    return (
        <div className="select-none">
        <h2 className="text-center text-4xl font-semibold mb-8 mt-16">Experiences</h2>
        <section className="flex flex-col items-center">
            { experiences.map((experience, index) => <SingleExperience key={index} {...experience} />) }
        </section>
        </div>
    )
}