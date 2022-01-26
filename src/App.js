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
    <div className="App wrapper">



        <Navbar style={{backgroundColor: "rgba(40  ,44,52,0.25)",borderRadius: "20px" }} expand="xxl">
            <Container>
                <Navbar.Brand className="bangers" style={{fontSize: "64px", color: "white"}} href="#home">HBCU HEX </Navbar.Brand>

            </Container>
        </Navbar>
        <br/>
        <header style={{borderRadius: "20px" }} className="App-header">
        <h1 style={{marginTop: "20px"}}>
        <b style={{fontSize: "38px", opacity: "0.7"}}>
            Get the colors of any HBCU
        </b>
        </h1>
       <br/>
        <ComboBox/>
      </header>

    </div>
  );
}

export default App;
