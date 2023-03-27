import { getFeaturedEvents } from '../dummy-data';
const HomePage = () => {
  // access function inside dummy data
	const featuredEvents = getFeaturedEvents();
	return (
		<div>
    <ul></ul>
		</div>
	);
};
export default HomePage;
