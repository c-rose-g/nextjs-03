import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
const HomePage = () => {
	// access function inside dummy data
	const featuredEvents = getFeaturedEvents();
	return (
		<div>
			<h1>Hello, world.</h1>
			<EventList items={featuredEvents} />
		</div>
	);
};
export default HomePage;
