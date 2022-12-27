import React, { useContext } from 'react';
import { store } from "../store";

function Headline() {
    const {state, dispatch} = useContext(store);

    return <div>
        <p>{state.insight}</p>
    </div>;
}

export default Headline