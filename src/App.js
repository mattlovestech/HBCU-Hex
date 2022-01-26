import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, FormControl, Navbar} from 'react-bootstrap';
import {ComboBox} from "./autocomplete";
import Container from "@mui/material/Container";
import React from "react";
import Stack from "@mui/material/Stack";
import DirectionStack from "./colors";




function App() {
  return (
    <div className="App">
        <Navbar className={"wrapper"} expand="xxl">
            <Container>
                <Navbar.Brand className="bangers" style={{fontSize: "64px", color: "white"}} href="#home">HBCU HEX </Navbar.Brand>

            </Container>
        </Navbar>
      <header className="App-header">
        <small>
        <b style={{fontSize: "38px", opacity: "0.5"}}>
            Grab the HEX colors of any HBCU in seconds
        </b>
        </small>
       <br/>
        <ComboBox/>
      </header>
    </div>
  );
}

export default App;
