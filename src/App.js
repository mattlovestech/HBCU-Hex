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
      <div className="wrapper">


    <div >
        <Navbar style={{backgroundColor: "rgba(40  ,44,52,0.25)",borderRadius: "20px", textAlign: "center"}} expand="xxl">
            <Container>
                <Navbar.Brand className="bangers" style={{fontSize: "64px", color: "white"}} href="#home">HBCU HEX </Navbar.Brand>
            </Container>
        </Navbar>
        <br/>
        <header style={{borderRadius: "20px" }} className="App-header">
        <ComboBox/>
      </header>

<hr/>

<Button style={{marginTop: "15px",backgroundColor: "white", color: "black", marginBottom:"15px"}} variant={"constrained"}> Report an Issue</Button>

        <a href="https://www.producthunt.com/posts/hbcu-hex?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hbcu-hex" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=331958&theme=light" alt="HBCU HEX - Find hex colors of any HBCU | Product Hunt" style={{width: "250px", height: "54px"}} width="250" height="54" /></a>
<br/>  <br/>
        Created with love 🥰 by @mattlovestech
    </div>
      </div>
  );
}



export default App;
