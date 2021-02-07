import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateNote from './components/CreateNote.jsx';
import CreateUser from './components/CreateUser.jsx';
import Navigation from './components/Navigation.jsx';
import NoteList from './components/NoteList.jsx';
import CreateUserShop from "./components/createUserShop";

function App() {
  return (
    <Router>
      <Navigation />

      <div className="container p-4">
        <Route path="/" component={NoteList} exact />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
        <Route path="/userShop" component={CreateUserShop} />        
      </div>


    </Router>
  );
}

export default App;
