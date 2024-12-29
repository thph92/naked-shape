import { forwardRef } from 'react';
import './home.scss';
import { pinkSmoke } from '@public/index';
import { Video } from '@components/video';

export const Home = forwardRef<any, any>((_, ref) => {
	return (
		<div ref={ref} className="home">
			<Video src={pinkSmoke} />
			<div className="fade-in-text">Welcome to Naked Shape</div>
		</div>
	);
});
