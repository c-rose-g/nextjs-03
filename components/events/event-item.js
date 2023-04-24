import Link from 'next/link';
import classes from './event-item.module.css'
import Button from '../ui/button'

const EventItem = (props) => {
	// object destructuring to pull out data, multiple props
	const { title, image, date, location, id } = props;

	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	// replace the comma with a new line
	const formattedAddress = location?.replace(', ', '\n');

	//  img src: the contents of the public folder is served statically by Next
	// acts like it's already in the folder
	
	// image in object destructuring is the same as name in image
	const exploreLink = `/events/${id}`;
	return (
		<li className={classes.item}>
			<img src={'/' + image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{humanReadableDate}</time>
					</div>
					<div className={classes.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
				<Button link={exploreLink}>Explore Event</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
