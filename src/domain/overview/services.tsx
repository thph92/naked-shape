import { forwardRef } from 'react';
import './services.scss';
import '../domain.scss';

export const Services = forwardRef<any, any>((_, ref) => {
	return (
		<div ref={ref} className="section services">
			<h2>Our Services</h2>
			<p>Explore our wide range of services...</p>
		</div>
	);
});
