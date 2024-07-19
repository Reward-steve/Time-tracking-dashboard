import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function CardProps({ image, alt, pText, id, hours, preHours, num }) {
	return (
		<div id={id} className='cards'>
			<div className='icon-img'>
				<img src={image} alt={alt} className='icons' />
			</div>
			<div className='cards-title-container'>
				<div className='card-title'>
					<p>{pText}</p>
					<FontAwesomeIcon icon={faEllipsis} className='dots' />
				</div>
				<div className='hour-container'>
					<h2>{hours}</h2>
					<p>
						{preHours}
						{num}
					</p>
				</div>
			</div>
		</div>
	);
}

export default CardProps;
