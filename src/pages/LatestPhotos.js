import { useEffect, useState } from "react";
import ImageViewer from "../components/ImageViewer";
import RoverChoiceButton from "../components/RoverChoiceButton";
import { ThreeCircles } from "react-loader-spinner";
import LoadingError from "../components/LoadingError";

export default function LatestPhotos() {
	const [photos, setPhotos] = useState([])
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
	const [roverName, setRoverName] = useState('Curiosity')
	const [isLoading, setIsLoading] = useState(true)
	const [fetchError, setFetchError] = useState(false)
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
		).catch(() => {
			setIsLoading(false)
			setFetchError(true)
		})
	}, [url])


	return (
		<div className="center-element">
			{isLoading ? <ThreeCircles
				visible={true}
				height="100"
				width="100"
				color="#000"
				ariaLabel="three-circles-loading"
				wrapperClass="center-element"
			/> : fetchError ? <LoadingError /> :
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
