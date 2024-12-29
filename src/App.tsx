import { BookingPage } from 'domain/booking-page/booking-page';
import { NavBar } from 'domain/nav-bar/nav-bar';
import { Home } from 'domain/overview/home';
import { RefObject, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './domain/overview/about';
import { Contact } from './domain/overview/contact';
import { Services } from './domain/overview/services';

export type SectionKeys = 'home' | 'about' | 'services' | 'contact' | 'book';

export const App = () => {
	const [activeNav, setActiveNav] = useState<SectionKeys>('home');

	const sectionRefs: Record<SectionKeys, RefObject<HTMLDivElement | null>> = {
		home: useRef<HTMLDivElement | null>(null),
		about: useRef<HTMLDivElement | null>(null),
		services: useRef<HTMLDivElement | null>(null),
		contact: useRef<HTMLDivElement | null>(null),
		book: useRef<HTMLDivElement | null>(null),
	};

	const scrollToSection = (section: SectionKeys) => {
		const target = sectionRefs[section]?.current;
		if (target) {
			setActiveNav(section);
			target.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<NavBar
				scrollToSection={scrollToSection}
				activeNav={activeNav}
				setActiveNav={setActiveNav}
			/>

			<Routes>
				<Route
					path="/"
					element={
						<>
							<Home ref={sectionRefs.home} />
							<About ref={sectionRefs.about} />
							<Services ref={sectionRefs.services} />
							<Contact ref={sectionRefs.contact} />
						</>
					}
				/>
				<Route path="/booking" element={<BookingPage />} />
			</Routes>
		</>
	);
};
