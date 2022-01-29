import * as React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import {PhotoCamera} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Autocomplete from "@mui/material/Autocomplete";
import Welcome from "./welcomeMessage";
import CopyButton from "./copyButton";
var json = require('./hexColors.json');


export default function Colors(input) {

   // console.log(input["colors"].substring(0, 6))
    let circles;
    let circlesAndButtons;

    // switch(input["colors"].substring(0, 6)) {
    switch(json[input["colors"]]) {

        case undefined:
            console.log(json[input["colors"]])
             circles = Array(~~(1)).fill(0).map( (key,index) =>
                <> <br/>
                 <div  key={index}>
                    <br/>

                         <a>Choose a <strong>school</strong> to see colors with hex codes</a>
                </div> </>
            )

            break;
        default:
            const colors = json[input["colors"]]
             circles = Array(~~(colors.length)).fill(0).map( (key,index) =>
                <div  key={index}>
                    <br/>
                    <div style={{backgroundColor: colors[index]}} className="circle">  </div>
                    <h6 style={{marginBottom: "-40px", marginTop: "10px"}}><code style={{color: "white"}}>{colors[index]}</code></h6>
                    <br/>
                    <CopyButton copyText={colors[index]}/>

                </div> );





    }



    return (

        <>

            <Stack direction="row" spacing={2}>
                {circles}

            </Stack>
            {circlesAndButtons}
            <br/>



        </>
    );
}
