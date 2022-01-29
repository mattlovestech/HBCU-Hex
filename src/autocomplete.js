import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Component} from "react";
import Colors from "./colors";
import Welcome from "./welcomeMessage";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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
        this.handleSelect()



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
            renderInput={(params) =>
                <TextField  sx={{ input: { color: "white" }}}
                            variant="filled"

                            {...params} onSelect={this.handleSelect}
                                                 onChange={this.handleSelect} label="Search" />}
        />

            <Colors colors={this.state.school}/>
            <Stack direction="horizontal" spacing={28} style={{marginTop: "0px"}}>

                <Button style={{margin:"10px"}}
                        variant="contained"
                        onClick={(this.handleClear) }> Clear
                </Button>

                <Button style={{margin:"10px"}}
                        variant="contained"> Copy All
                </Button>

            </Stack>


            </>
    );}
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films =
    // 'Alabama A&M',
    // 'Alabama State',
Object.keys(json)


;

