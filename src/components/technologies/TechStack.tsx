import SingleTechnology from "./SingleTechnology"
import technologies from '../../../data/technologies'

export default function TechStack() {
    return (
        <>
        <h2 className="text-center text-4xl font-semibold my-10 select-none">Tech Stack</h2>
        <div className="flex justify-center select-none">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 max-w-[1000px] place-items-center place-content-center">
                { technologies.map((technology, index) => <SingleTechnology key={index} {...technology} />) }
            </div>
        </div>
        </>
    )
}



// bg-orange-500
// shadow-orange-500/50
// bg-purple-600
// shadow-purple-600/50
// bg-yellow-400
// shadow-yellow-400/50
// bg-blue-500
// shadow-blue-500/50
// bg-green-600
// shadow-green-600/50
// bg-gray-900
// shadow-gray-900/50