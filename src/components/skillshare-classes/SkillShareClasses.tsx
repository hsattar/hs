import SingleClass from "./SingleClass"
import classes from '../../../data/classes'

export default function SkillShareClasses() {
    return (
        <>
        <h2 className="text-center text-4xl font-semibold my-10 select-none">Skill Share Classes</h2>
        <div className="flex justify-center select-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] px-6 place-items-center place-content-center">
                { classes.map((skClass, index) => <SingleClass key={index} {...skClass} />) }
            </div>
        </div>
        </>
    )
}