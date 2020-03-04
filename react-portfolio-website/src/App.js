import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';

class App extends React.Component{
  

  // navigation bar
  constructor(props) {
    super(props);
    this.state = {
      title: 'Justin Diala',
      header: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],

      home: {

        title: 'Push through darkness and conquer the unknown',
        subTitle: 'Computer Engineering student 2022',
        text: 'Learn more about me and my projects below'
      },

      about: {
        title: 'About Me'
      },

      contact: {
        title: "Let's Talk"
      }


    }
  }

  render() {
    return (
      <Router>
      
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Justin Diala</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer />

        </Container>
      
      </Router>
    );
  }

}

export default App;
