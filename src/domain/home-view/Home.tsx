import { forwardRef } from 'react';
import './Home.scss';
import '../Domain.scss';
import { pinkSmoke } from '@public/index';
import { Video } from '@components/video';

export const Home = forwardRef<any, any>((_, ref) => {
	return (
		<div ref={ref} className="section home">
			<Video src={pinkSmoke} />
			<div className="fade-in-text">Welcome to Naked Shape</div>
		</div>
	);
});
