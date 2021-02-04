import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import Navigation from './components/Navigation';
import NoteList from './components/NoteList';

function App() {
  return (
    <Router>
      <Navigation />

      <Route path="/" component={NoteList} exact />
      <Route path="/edit/:id" component={CreateNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/user" component={CreateUser} />


    </Router>
  );
}

export default App;
