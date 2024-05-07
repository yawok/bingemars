import { NavLink } from "react-router-dom"

export default function Navbar() {
	const navPaths = ['latest-photos', 'curiosity', 'perseverance', 'opportunity']

	return (
		<nav>
			<h1>Binge Mars</h1>
			<section>
				{
					navPaths.map((path) => (
						<NavLink
							key={path}
							to={`/${path}`}
							className={({ isActive }) => {
								return isActive ? 'selected-nav' : '';
							}} >
							{path.toUpperCase().replace('-', ' ')}
						</NavLink>
					))
				}
			</section>
		</nav>
	)
}