import 'locomotive-scroll/dist/locomotive-scroll.css';
import './typography.css';
import './tokens.css';
import './components/motion/motion.css';
import './navbar-footer.css';
import './style.css';
import './pages.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);
