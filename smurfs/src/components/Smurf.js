import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/index";

function Smurf(props) {
    console.log(props)
    return (
        <div>
            <button onClick={()=> {props.getSmurf();}}>Get Smurf</button>
            {props.smurf.map(item => 
                 <div><br></br><b>Name:</b> {item.name}<br></br><b>Age:</b> {item.age}<br></br><b>Height:</b> {item.height}<br></br></div>)}
        </div>
        
    )
}

export default connect(
    state => {
        return { smurf: state.smurf };
    },
    { getSmurf }
)(Smurf);