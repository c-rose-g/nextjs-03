// file name can be either in PascalCase or kabob-case
// doesn't care where the events are coming from, only outputting the events
// recieves props just to display/render from where the event data is fetched
import { EventItem } from './event-item'
const EventList = (props) => {
	const { items } = props;
	return (
		<ul>
			{items.map(event => <EventItem/>)}
		</ul>
	);
};

export default EventList;
