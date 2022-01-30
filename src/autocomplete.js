import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Component} from "react";
import Colors from "./colors";
import Welcome from "./welcomeMessage";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CopyButton from "./copyButton";
var json = require('./hexColors.json');

export class ComboBox extends Component {

    constructor(props) {

        super(props);
        this.state = { school:""}

        // this.state = { school: "Alabama State" }


    }

    handleSelect = (event) => {
        console.log(event)
        console.log("target:", event.target.value)
        switch(event.target.value) {
            case undefined:
            case "":
                this.setState({
                    school: ""
                })
                break;
            default:
                this.setState({
                    school: event.target.value
                })
        }


    }
    handleClear = (event) => {
        this.setState({school: ""})




    }

    componentDidMount() {


    }

    render() {


    return (
        <>
            <div style={{paddingTop: "40px", paddingBottom: "20px", textAlign: "center"}}>
                <a>Choose a <strong>school</strong> to find their colors with hex codes</a>

            </div>


            <Autocomplete

            id="combo-box-demo"
            options={Object.keys(json)}
            sx={{ width: "70%"
            }}
            renderInput={(params) =>
                <TextField  sx={{ input: { color: "white", borderColor: "white"}}}
                            variant="filled"

                            {...params} onSelect={this.handleSelect}
                                                 onChange={this.handleSelect} label="Search" />}
        />
            <Stack direction="row" spacing={28} style={{marginTop: "20px", marginBottom: "0px"}}>
                <Button style={{margin:"10px", color: "black", background : "white"}}
                        variant="contained"
                        onClick={(this.handleClear) }> Clear
                </Button>

                <Button style={{margin:"10px"}}
                        variant="contained" disabled={true}> Copy All
                </Button>
            </Stack>

            <Colors colors={this.state.school}/>


            </>
    );}
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films =
//     // 'Alabama A&M',
//     // 'Alabama State',
//
//
//
// ;

