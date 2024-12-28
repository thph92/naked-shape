import { RefObject, useRef } from 'react';
import './App.scss';
import { About } from './domain/about-view/About';
import { Contact } from './domain/contact-view/Contact';
import { Home } from './domain/home-view/Home';
import { Services } from './domain/services-view/services';

type SectionKeys = 'home' | 'about' | 'services' | 'contact';

{
	/* 
		TODO:
		-- fix translation 
		-- push to github
		-- impl Dependabot
		-- make a sticky booking bar
		-- make navigation for booking
	*/
}

export const App = () => {
	const sectionRefs: Record<SectionKeys, RefObject<HTMLDivElement | null>> = {
		home: useRef<HTMLDivElement | null>(null),
		about: useRef<HTMLDivElement | null>(null),
		services: useRef<HTMLDivElement | null>(null),
		contact: useRef<HTMLDivElement | null>(null),
	};

	const scrollToSection = (section: SectionKeys) => {
		const target = sectionRefs[section]?.current;
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleKeyPress = (event: React.KeyboardEvent, section: SectionKeys) => {
		if (event.key === 'Enter' || event.key === ' ') {
			scrollToSection(section);
		}
	};

	return (
		<>
			<nav className="navbar" style={{ zIndex: 1 }}>
				<div className="navbar-menu">
					<button
						onClick={() => scrollToSection('home')}
						onKeyUp={(event) => handleKeyPress(event, 'home')}
						className="navbar-button"
					>
						Home
					</button>
					<button
						onClick={() => scrollToSection('about')}
						onKeyUp={(event) => handleKeyPress(event, 'about')}
						className="navbar-button"
					>
						About
					</button>
					<button
						onClick={() => scrollToSection('services')}
						onKeyUp={(event) => handleKeyPress(event, 'services')}
						className="navbar-button"
					>
						Services
					</button>
					<button
						onClick={() => scrollToSection('contact')}
						onKeyUp={(event) => handleKeyPress(event, 'contact')}
						className="navbar-button"
					>
						Contact
					</button>
				</div>
			</nav>

			<Home ref={sectionRefs.home} />
			<About ref={sectionRefs.about} />
			<Services ref={sectionRefs.services} />
			<Contact ref={sectionRefs.contact} />

			{/* <div
				style={{
					position: 'absolute',
					height: 110,
					width: 50,
					backgroundColor: 'red',
					borderTopLeftRadius: 10,
					borderBottomLeftRadius: 10,
					zIndex: 1,
					top: '50vh',
					right: 0,
				}}
			>
				book now
			</div> */}
		</>
	);
};
