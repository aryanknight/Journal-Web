import './App.css';
import LandingPage from './Pages/LandingPage';
import JournlsPage from './Pages/JournlsPage';
import { BrowserRouter , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <LandingPage/>
      </Route>
      <Route exact path="/journals">
        <JournlsPage/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
