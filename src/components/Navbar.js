import { NavLink } from "react-router-dom"
import { ReactComponent as MarsIcon } from "../assets/mars-icon(b).svg"

export default function Navbar() {
	const navPaths = ['Latest-photos', 'Perseverance', 'Curiosity', 'Opportunity', 'Spirit']

	return (
		<nav>
			<NavLink
				key={"home"}
				to={'/'}
				className="title">
				<MarsIcon height='80px' width="80px" /><h1>Binge Mars</h1>
			</NavLink>
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