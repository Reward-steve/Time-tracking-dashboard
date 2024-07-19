function ProfileProps({ pText, h2Text }) {
	return (
		<div className='profile-info'>
			<p>{pText}</p>
			<h2 className='name'>{h2Text}</h2>
		</div>
	);
}

export default ProfileProps;
