import { useEffect, useState } from "react";
import ImageViewer from "../components/ImageViewer";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

export default function LatestPhotos() {
	const [photos, setPhotos] = useState([])
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
	const [isLoading, setIsLoading] = useState(true)
	let photo

	const url = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos'

	useEffect(() => {
		fetch('https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos').then(
			(response) => {
				if (!response.ok) {
					throw new Error("There was an error loading the photos.")
				}

				return response.json()
			}
		).then(
			(data) => {
				setPhotos(data['latest_photos'])
				setIsLoading(false)
			}
		).catch(error => console.log(error))
	}, [])

	const handleBack = () => {
		console.log("Back")
		if (currentPhotoIndex > 0) {
			setCurrentPhotoIndex(currentPhotoIndex - 1)
		}
	}

	const handleNext = () => {
		console.log("Next")
		if (currentPhotoIndex < photos.length - 1) {
			setCurrentPhotoIndex(currentPhotoIndex + 1)
		}
	}

	photo = photos[currentPhotoIndex]

	if (isLoading) {
		return <Loading />
	}

	return (
		<>
			<Navbar />
			<ImageViewer
				photo={photo}
				handleBack={() => handleBack()}
				handleNext={() => handleNext()}
			/>
		</>
	)
}
