import { Link } from "react-router-dom"

export function GridLarge({portfolio, ...props}) {
  return (
<>

  <ul
    role="list"
    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  >
    {portfolio.map((project) => {

return (
  <li className="relative">
      
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <Link to={project.slug}>
        <img
          src={project.image}
          alt=""
          className="pointer-events-none object-cover group-hover:opacity-75"
        />
        </Link>
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {project.title}
      </p>
      {/* <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {project.description}
      </p> */}
    </li>
  
)

})}
  </ul>
</>
  )
}
