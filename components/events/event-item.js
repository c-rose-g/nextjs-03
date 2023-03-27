import Link from 'next/link';
const EventItem = (props) => {
	// object destructuring to pull out data, multiple props
	const { title, image, date, location, id } = props;

	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
  // replace the comma with a new line
	const formattedAddress = location.replace(', ', '\n');
  //  img src: the contents of the public folder is served statically by Next
  // acts like it's already in the folder
  // image in object destructuring is the same as name in image
  const exploreLink = `/events/${id}`
	return (
		<li>
			<img src={'/' + image} alt={title} />
			<div>
				<div>
					<h2>{title}</h2>
					<div>
						<time>{humanReadableDate}</time>
					</div>
					<div>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div>
					<Link href={exploreLink}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
