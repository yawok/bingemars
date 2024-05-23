function RoverChoiceButton({roverName, setRoverName, className}) {


	return (
		<button className={className + ' rounded-btn'} onClick={() => setRoverName(roverName)}>{roverName}</button>
	)
}

export default RoverChoiceButton