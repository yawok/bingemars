import { Link } from "react-router-dom"

export default function Navbar() {
	return (
		<nav>
			<h1>Binge Mars</h1>
			<section>
				<Link to={'/latest-photos'} >Latest Photos</Link>
				<Link to={'/curiosity'}>Curiosity</Link>
				<Link to={'/perseverance'}>Perseverance</Link>
				<Link to={'/opportunity'}>Opportunity</Link>
			</section>
		</nav>
	)
}