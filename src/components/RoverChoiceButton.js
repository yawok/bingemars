function RoverChoiceButton({roverName, setRoverName, className}) {


	return (
		<button className={className + ' rover-choice-button'} onClick={() => setRoverName(roverName)}>{roverName}</button>
	)
}

export default RoverChoiceButton