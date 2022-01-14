import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Navbar } from './components/navbar';
import { Router } from './Router';

function App() {

    const queryClient = new QueryClient();

    return (
        <>
            <Navbar />
            <Router />
        </>
    );
}

export default App;
