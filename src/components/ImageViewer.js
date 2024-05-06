export default function ImageViewer({ photo, currentIndex, photosLength, handleBack, handleNext }) {

	return (
		<div>
			<button onClick={handleBack} disabled={currentIndex === 0}>Back</button>
			<div>
				<img src={photo.img_src} alt="photo" width='50%' height='50%' />
			</div>
			<button onClick={handleNext} disabled={currentIndex === photosLength - 1}>Next</button>
		</div>
	)
}