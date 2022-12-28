import React, { useContext } from 'react';
import { store } from "../store";

function Headline() {
    const {state, dispatch} = useContext(store);

    return <div>
        <br></br>
        <h2>{state.insight}</h2>
    </div>;
}

export default Headline