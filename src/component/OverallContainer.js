import ProfileName from "./ProfileProps";
import Images from "./ProfileImgProps";
import profilePic from "../images/image-jeremy.png";

function OverallContainer({ Daily, Weekly, Monthly }) {
	return (
		<div className='profile-remark-container'>
			<div className='profile-remark'>
				<Images image={profilePic} alt={"profile-img"} />
				<ProfileName pText={"Report for"} h2Text={"Jeremy Robson"} />
			</div>

			<ul className='remark-options'>
				<li className='remark-option' onClick={Daily}>
					{"Daily"}
				</li>
				<li className='remark-option' onClick={Weekly}>
					{"Weekly"}
				</li>
				<li className='remark-option' onClick={Monthly}>
					{"Monthly"}
				</li>
			</ul>
		</div>
	);
}

export default OverallContainer;
