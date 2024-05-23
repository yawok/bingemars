export default function ImageViewer({ photo, currentIndex, photosLength, handleBack, handleNext }) {

	return (
		<div className="image-viewer">
			<button className="image-control-btn" onClick={handleBack} disabled={currentIndex === 0}>&lt; Previous</button>
			<div>
				<img src={photo.img_src} alt={`id: ${photo.id}`} />
			</div>
			<button className="image-control-btn" onClick={handleNext} disabled={currentIndex === photosLength - 1}>Next &gt;</button>
		</div>
	)
}