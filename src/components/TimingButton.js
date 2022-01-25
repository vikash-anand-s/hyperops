import React from "react";

function TimingButton(props){
    return (<div>
        <button style={{float:"left"}} onClick={props.onClick} value={props.value}>{props.text}</button>
    </div>);
}

export default TimingButton;