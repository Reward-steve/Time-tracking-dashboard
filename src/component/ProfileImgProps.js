function Images({ image, alt }) {
	return (
		<div className='profile-pic-container'>
			<img src={image} alt={alt} className='profile-pic' />
		</div>
	);
}

export default Images;
