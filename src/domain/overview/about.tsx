import { forwardRef } from 'react';
import './about.scss';
import '../domain.scss';

export const About = forwardRef<any, any>((_, ref) => {
	return (
		<div ref={ref} className="section about">
			<h2>About Us</h2>
			<p>We create amazing experiences...</p>
		</div>
	);
});
