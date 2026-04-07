import { Link } from "react-router-dom";
import RoversPotrait from "../components/RoversPotraitSVG";
import { Tooltip } from "react-tooltip";

const rovers = ["Sojourner", "Spirit", "Opportunity", "Curiosity", "Perseverance", "Ingenuity"]
export default function HomePage() {
	return <div>
		<section className="center-element header-text">
			<h1 data-test="header-text"> Watch all the pictures from the</h1>
			<h1 className="red-planet">Red Planet</h1>
			<Link to={'/latest-photos'}>
				<button data-test="cta-button"
					className="rounded-btn">
					Watch Latest Photos
				</button>
			</Link>
		</section>
		{
			rovers.map((name, index) => (
				<Tooltip anchorSelect={`.rover-svg${index}`} place="top">{name}</Tooltip>
			)
			)}

		<RoversPotrait className="rovers-potrait" />
	</div>
}