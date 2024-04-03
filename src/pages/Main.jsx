import RightContent from '../components/RightContent';
import Contact from '../components/Right/Contact';
import Figure from '../components/Right/Figure';
import LeftContent from './../components/LeftContent';
import Profile from './../components/Left/Profile';
import Title from './../components/Left/Title';

const Main = () => {
	return (
		<main id='main' role='main'>
		<LeftContent>
			<Profile />
			<Title />
		</LeftContent>
		<RightContent>
			<Contact />
			<Figure />
		</RightContent>
		</main>
	)
}

export default Main