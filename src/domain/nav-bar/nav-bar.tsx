import { SectionKeys } from 'App';
import { Dispatch, SetStateAction } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './nav-bar.scss';

type Props = {
	scrollToSection: (section: SectionKeys) => void;
	activeNav: SectionKeys;
	setActiveNav: Dispatch<SetStateAction<SectionKeys>>;
};

const SECTIONS: { key: SectionKeys; label: string }[] = [
	{ key: 'home', label: 'Home' },
	{ key: 'about', label: 'About' },
	{ key: 'services', label: 'Services' },
	{ key: 'contact', label: 'Contact' },
];

export const NavBar = ({ scrollToSection, activeNav, setActiveNav }: Props) => {
	const navigate = useNavigate();
	const location = useLocation();
	const isBookingPage = location.pathname.includes('/booking');

	const navigateToBookingPage = () => {
		setActiveNav('book');
		navigate('/booking');
	};

	if (isBookingPage) {
		return null;
	}

	return (
		<nav className="navbar" style={{ zIndex: 1 }}>
			<div className="navbar-menu">
				{SECTIONS.map(({ key, label }) => (
					<button
						key={key}
						onClick={() => scrollToSection(key)}
						className={`navbar-button ${
							activeNav === key ? 'navbar-button-active' : ''
						}`}
					>
						{label}
					</button>
				))}
				<button onClick={navigateToBookingPage} className="navbar-button">
					Book
				</button>
			</div>
		</nav>
	);
};
