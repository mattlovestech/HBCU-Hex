import React, {Component, useState} from "react"
import Button from "react-bootstrap/Button";
import {CopyAll} from "@mui/icons-material";
import Toast from "react-bootstrap/cjs/Toast";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";


export default class CopyButton extends Component {

    copyText = this.props.copyText

    constructor(props) {
        super(props);
        this.state = {
            toastHidden: false
        }
    }

// copy to clipboard function
    copyToClipboard = (str) => {

        //COPY LOGIC
        //https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript
        //create text area
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

        // //TOAST LOGIC
        // this.setState({
        //     toastHidden: true
        // })
        // setTimeout(() => {  this.setState({
        //     toastHidden: false
        // }) }, 3500);

    };



    render() {
        return (<div>
                <Button onClick={() => this.copyToClipboard(this.copyText)}  style={{marginTop: "15px",backgroundColor: "transparent", color: "white"}} variant={"text"}> {<ContentCopyIcon/>} </Button>

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