import './theme.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';

const root = document.getElementById('root');

if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
