import './App.css';
import LandingPage from './Page';
import { BrowserRouter , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <LandingPage/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
