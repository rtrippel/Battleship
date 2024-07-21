import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import {AppProvider} from "./context/AppContext.jsx";
import Modal from "react-modal";

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
        <App />
    </AppProvider>
)
