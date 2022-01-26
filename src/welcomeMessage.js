import React from "react";
import Button from "@mui/material/Button";

export default function Welcome() {
    return(
        <div style={{textAlign: "center"}}>
            <div className="circle"/>
            <h6 style={{marginBottom: "-40px", marginTop: "10px", opacity: ".3"}}><code> ...</code></h6>
            <br/>
            <Button style={{marginTop: "15px", color: "white", opacity: ".1"}} variant={"outlined"}> ... </Button>

        </div>
    )
}