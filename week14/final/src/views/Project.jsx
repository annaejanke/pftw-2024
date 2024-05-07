import {useParams } from "react-router-dom";

export function Project({data, ...props}) {
    const {slug} = useParams();
    const project = data.find((project) => project.slug === slug)

    return (
        <div className="mt-40 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">{project.title}</h2>
        <img src={project.image} alt={project.name} width={400} />
        {/* <p> {project.description}</p> */}
        </div>
    )
}