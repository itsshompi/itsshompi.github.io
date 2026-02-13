import { createRoot } from 'react-dom/client';

//CSS
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
import './index.css';

import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);