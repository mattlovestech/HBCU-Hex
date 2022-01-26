import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Component} from "react";
import Colors from "./colors";
var json = require('./hexColors.json');

export class ComboBox extends Component {

    constructor(props) {

        super(props);
        this.state = { school: "Choose a school, then copy the hex colors form below", school1:  ""}

        // this.state = { school: "Alabama State" }


    }

    handleSelect = (event) => {
        console.log("target:", event.target.value)
        switch(event.target.value) {
            case "":
                break;
            default:
                this.setState({
                    school: event.target.value
                })
        }


    }
    render() {


    return (
        <><Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 400,
                color:"white"
            }}
            renderInput={(params) => <TextField  sx={{ input: { color: "white" }}} variant="filled" value={this.state.school1} {...params} onSelect={this.handleSelect} label="Search" />}
        /><br/>
            <small>{this.state.school}</small><br/>
            <Colors colors={this.state.school}/>
            </>
    );}
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'Alabama A&M'},
    { label: 'Alabama State'},


];
