import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
var json = require('./hexColors.json');

export default function Colors(input) {

   // console.log(input["colors"].substring(0, 6))
    let circles;
    // switch(input["colors"].substring(0, 6)) {
    switch(json[input["colors"]]) {

        case undefined:
             circles = Array(~~(4)).fill(0).map( (key,index) =>
                <div  key={index}>
                    <div className="circle-rainbow"> </div>
                    <h6 style={{marginBottom: "-50px", marginTop: "10px"}}>#-------</h6>
                    <br/>
                    <Button style={{marginTop: "15px", backgroundColor: "white", color: "black"}} variant={"contained"}> Copy </Button>
                    {/*//    {index}*/}
                </div>

            );
            break;
        default:
            const colors = json[input["colors"]]
             circles = Array(~~(colors.length)).fill(0).map( (key,index) =>
                <div  key={index}>
                    <div style={{backgroundColor: colors[index]}} className="circle"> </div>
                    <h6 style={{marginBottom: "-50px", marginTop: "10px"}}>{colors[index]}</h6>
                    <br/>
                    <Button style={{marginTop: "15px", backgroundColor: "white", color: colors[index]}} variant={"contained"}> Copy </Button>
                    {/*//    {index}*/}
                </div>

            );
            console.log(49)
    }



    return (

        <div>
            <Stack direction="row" spacing={2}>
                {circles}
            </Stack>
        </div>
    );
}
