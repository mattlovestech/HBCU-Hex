import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, FormControl, Navbar} from 'react-bootstrap';
import {ComboBox} from "./autocomplete";
import Container from "@mui/material/Container";
import React from "react";
import Stack from "@mui/material/Stack";
import DirectionStack from "./colors";
import FullWidthGrid from "./layout";




function App() {
  return (
      <div>


    <div className="wrapper">



        <Navbar style={{backgroundColor: "rgba(40  ,44,52,0.25)",borderRadius: "20px", textAlign: "center"}} expand="xxl">
            <Container>
                <Navbar.Brand className="bangers" style={{fontSize: "64px", color: "white"}} href="#home">HBCU HEX </Navbar.Brand>
            </Container>
        </Navbar>
        <div style={{marginTop: "20px", textAlign: "center"}}>

        </div>
        <br/>
        <header style={{borderRadius: "20px" }} className="App-header">
        <ComboBox/>
      </header>

<hr/>

<Button style={{marginTop: "15px",backgroundColor: "white", color: "black"}} variant={"constrained"}> Report an Issue</Button>
        <br/>
        <br/>
        Created with love by @mattlovestech

    </div>
          <div style={{paddingBottom: "49px"}}>
              <br/>

              <br/>
          </div>

      </div>
  );
}

export default App;
