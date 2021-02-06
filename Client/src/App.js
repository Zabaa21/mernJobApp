import logo from './logo.svg';
import './App.css';
import Panel from './components/Panel';
import {BrowserRouter, Route} from 'react-router-dom';
import SharePage from './components/SharePage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Panel} />
      <Route exact path='/share/:userName' component={SharePage} />
    </BrowserRouter>
  );
}

export default App;
