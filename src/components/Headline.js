import React, { useContext } from 'react';
import { store } from "../store";

function Headline() {
    const {state, } = useContext(store);

    return <div width='100%'>
        {/* <br></br> */}
        {/* <h2>{state.insight}</h2>
        <input name='insight' width='80%' height={'100%'}></input>
        <input type="submit" width='20%' value="生成"></input> */}
    </div>;
}

export default Headline