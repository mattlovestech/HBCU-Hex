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
    <div className="wrapper">



        <Navbar style={{backgroundColor: "rgba(40  ,44,52,0.25)",borderRadius: "20px", textAlign: "center"}} expand="xxl">
            <Container>
                <Navbar.Brand className="bangers" style={{fontSize: "64px", color: "white"}} href="#home">HBCU HEX </Navbar.Brand>

            </Container>
        </Navbar>
        <br/>
        <header style={{borderRadius: "20px" }} className="App-header">
        <div style={{marginTop: "20px", textAlign: "center"}}>
        <strong style={{fontSize: "25px",opacity: "0.7", textAlign: "center"}}>
            Get the colors of any HBCU
        </strong>
        </div>
       <br/>
        <ComboBox/>
      </header>

    </div>
  );
}

export default App;
