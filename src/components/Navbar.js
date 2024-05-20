import { NavLink } from "react-router-dom"

export default function Navbar() {
	const navPaths = ['Latest-photos', 'Curiosity', 'Perseverance', 'Ppportunity']

	return (
		<nav>
			<h1>Binge Mars</h1>
			<section>
				{
					navPaths.map((path) => (
						<NavLink
							key={path}
							to={`/${path.toLowerCase()}`}
							className={({ isActive }) => {
								return isActive ? 'selected-nav' : '';
							}} >
							{path.replace('-', ' ')}
						</NavLink>
					))
				}
			</section>
		</nav>
	)
}