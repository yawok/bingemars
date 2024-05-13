import { useEffect, useState } from "react";
import ImageViewer from "../components/ImageViewer";
import Loading from "../components/Loading";
import RoverChoiceButton from "../components/RoverChoiceButton";
import { DNA, ThreeCircles } from "react-loader-spinner";

export default function LatestPhotos() {
	const [photos, setPhotos] = useState([])
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
	const [roverName, setRoverName] = useState('Curiosity')
	const [isLoading, setIsLoading] = useState(true)
	const rovers = ["Curiosity", "Perseverance"]

	let url = `https://mars-photos.herokuapp.com/api/v1/rovers/${roverName}/latest_photos`

	useEffect(() => {
		fetch(url).then(
			(response) => {
				if (!response.ok) {
					throw new Error("There was an error loading the photos.")
				}
				return response.json()
			}
		).then(
			(data) => {
				setPhotos(data['latest_photos'])
				setCurrentPhotoIndex(0)
				setIsLoading(false)
			}
		).catch(error => console.log(error))
	}, [url])


	return (
		<div>
			{isLoading ? <ThreeCircles
				visible={true}
				height="100"
				width="100"
				color="#000"
				ariaLabel="three-circles-loading"
				wrapperStyle={{}}
				wrapperClass="loading-spinner"
			/> :

				<div className="latest-photos">
					<div>
						{
							rovers.map((rover) => (
								<RoverChoiceButton
									key={rover}
									roverName={rover}
									setRoverName={setRoverName}
									className={roverName === rover ? 'selected-rover' : ''}>
									{rover.toUpperCase()}
								</RoverChoiceButton>
							))
						}
					</div>
					<ImageViewer
						photo={photos[currentPhotoIndex]}
						currentIndex={currentPhotoIndex}
						photosLength={photos.length}
						handleBack={() => setCurrentPhotoIndex(currentPhotoIndex - 1)}
						handleNext={() => setCurrentPhotoIndex(currentPhotoIndex + 1)}
					/>
				</div>
			}
		</div>
	)
}
