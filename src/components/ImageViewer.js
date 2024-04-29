export default function ImageViewer({ photo, handleBack, handleNext }) {

	
	return (
		<div>
			<button onClick={handleBack}>Back</button>
			<div>
				<img src={photo.img_src} alt="photo" width='400px' height='400px' />
			</div>
			<button onClick={handleNext}>Next</button>
		</div>
	)
}