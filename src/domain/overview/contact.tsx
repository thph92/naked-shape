import { forwardRef } from 'react';
import './Contact.scss';
import '../Domain.scss';

export const Contact = forwardRef<any, any>((_, ref) => {
	return (
		<div ref={ref} className="section contact">
			<h2>Contact Us</h2>
			<p>Feel free to get in touch...</p>
		</div>
	);
});