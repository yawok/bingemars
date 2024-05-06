function RoverChoiceButton({roverName, setRoverName}) {


	return (
		<button onClick={() => setRoverName(roverName)}>{roverName}</button>
	)
}

export default RoverChoiceButton