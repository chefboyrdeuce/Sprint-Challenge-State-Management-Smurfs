import axios from 'axios';

export const getSmurf = () => (dispatch) => {
        // dispatch({ type: "LOADING"});
        axios   
            .get("http://localhost:3333/smurfs")
            .then(res => {
                dispatch({ type: "NEW_SMURF", payload: res.data});
                console.log(res)
            })
            .catch(err => console.log("ERROR:", err));
};

export const addSmurf = () => (dispatch) => {
    dispatch({ type: "ADD_SMURF" })
}

