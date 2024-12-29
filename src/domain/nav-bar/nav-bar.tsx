import { SectionKeys } from 'App';
import './nav-bar.scss';

type Props = {
	scrollToSection: (section: SectionKeys) => void;
	activeNav: SectionKeys;
};

export const NavBar = ({ scrollToSection, activeNav }: Props) => {
	return (
		<nav className="navbar" style={{ zIndex: 1 }}>
			<div className="navbar-menu">
				<button
					onClick={() => scrollToSection('home')}
					className="navbar-button"
					style={{
						color: activeNav === 'home' ? 'var(--palette-primary)' : undefined,
					}}
				>
					Home
				</button>
				<button
					onClick={() => scrollToSection('about')}
					className="navbar-button"
					style={{
						color: activeNav === 'about' ? 'var(--palette-primary)' : undefined,
					}}
				>
					About
				</button>
				<button
					onClick={() => scrollToSection('services')}
					className="navbar-button"
					style={{
						color:
							activeNav === 'services' ? 'var(--palette-primary)' : undefined,
					}}
				>
					Services
				</button>
				<button
					onClick={() => scrollToSection('contact')}
					className="navbar-button"
					style={{
						color:
							activeNav === 'contact' ? 'var(--palette-primary)' : undefined,
					}}
				>
					Contact
				</button>
				<button
					// onClick={() => scrollToSection('contact')}
					className="navbar-button"
				>
					Book
				</button>
			</div>
		</nav>
	);
};
