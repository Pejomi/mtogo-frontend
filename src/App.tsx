import './assets/styles/App.css';
import { Link } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import NavigationBar from './components/Navigationbar';

function App() {
  return (
    <>
      <NavigationBar />
      <AppRouter />
    </>
  );
}

export default App;
