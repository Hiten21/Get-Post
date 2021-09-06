import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './componet/AddUser';
import AllUser from './componet/AllUser';
import EditUser from './componet/EditUser';
import LandingPage from './componet/LandingPage';
import Navbar from './componet/Navbar';
import NotFound from './componet/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/all" component={AllUser} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route path="/" component={NotFound} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
