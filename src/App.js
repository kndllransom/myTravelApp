import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { Container } from "@material-ui/core";
import List from './pages/tripList'
import Add from './pages/addTrip'
import Home from './pages/Home'
import './App.css'


function App() {

  return (
    <div className="App">

      <Router>
        <AppBar position="static">
          <Toolbar variant="dense">          
            <Typography variant="h6" color="inherit">
              Travel
            </Typography>
              <>
              <Button color="inherit" component={NavLink} to="/">
                  Home
                </Button> 
                <Button color="inherit" component={NavLink} to="/List">
                  List
                </Button>
                <Button color="inherit" component={NavLink} to="/Add">
                  Add
                </Button>
              </>
          </Toolbar>
        </AppBar>
        <Container style={{ margin: '2em auto' }}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/List">
                <List />
              </Route>
              <Route path="/Add">
                <Add />
              </Route>            
            </Switch>
          </Container>
      </Router>
        
    </div>
  );
}

export default App;
