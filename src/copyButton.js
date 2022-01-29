import React, {Component, useState} from "react"
import Button from "react-bootstrap/Button";
import {Check, CopyAll} from "@mui/icons-material";
import Toast from "react-bootstrap/cjs/Toast";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CircularProgress from "@mui/material/CircularProgress";


export default class CopyButton extends Component {

    copyText = this.props.copyText

    constructor(props) {
        super(props);
        this.state = {
            toastHidden: false,
            copyIcon: <ContentCopyIcon/>
        }
    }


// copy to clipboard function
    copyToClipboard = (str) => {
        this.setState({copyIcon: <CircularProgress color="success" style={{height: "25px", width: "25px"}} />})
        const el = document.createElement('textarea');
        el.value = str; //get string that was passed through
        //hide text area with css
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        // add to document body
        document.body.appendChild(el);
        el.select(); //select str
        document.execCommand('copy'); //copy str
        document.body.removeChild(el); //remove tet area
        setTimeout(() => {
            this.setState({ copyIcon: <Check/> });
        }, 600);
        setTimeout(() => {
            this.setState({ copyIcon: <ContentCopyIcon/> });
        }, 5000);



    };



    render() {
        return (<div>
                <Button onClick={() => this.copyToClipboard(this.copyText)}  style={{marginTop: "15px",backgroundColor: "transparent", color: "white"}} variant={"text"}> {this.state.copyIcon} </Button>

                {/*<Button style={{*/}
                {/*    width: "100%",*/}
                {/*    backgroundColor: "transparent",*/}
                {/*    color: "black",*/}
                {/*    //   height: "auto",*/}
                {/*    borderColor: "transparent",*/}
                {/*    //  fontSize: "2.8vmin",*/}
                {/*    // whiteSpace: "nowrap",*/}
                {/*    margin: "5px"}}><CopyAll /></Button>*/}
                {/*//Toast logic for copied item*/}


                <div >


                </div>
            </div>


        )
    }
}