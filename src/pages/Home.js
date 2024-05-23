import RoversPotrait from "../components/RoversPotraitSVG";
import { Tooltip } from "react-tooltip";

const rovers = ["Sojourner", "Spirit", "Opportunity", "Curiosity", "Perseverance", "Ingenuity"]
export default function HomePage() {
	return <div className="">
		<section className="center-element header-text">
			<h1> Watch all the pictures from the</h1>
			<h1 className="red-planet">Red Planet</h1>
		</section>
		{
			rovers.map((name, index) => (
				<Tooltip anchorSelect={`.rover-svg${index}`} place="top">{name}</Tooltip>
			)
		)}
		
		<RoversPotrait className="rovers-potrait"/>
	</div>
}