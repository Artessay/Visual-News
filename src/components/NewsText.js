import React, { useContext } from 'react';
import { store } from "../store";

function NewsText() {
    const {state, } = useContext(store);

    return <div className='news'>
        {state.news} <br/>

        <p>Luka is Luka. He's the best player in the world. He showed that tonight, carrying the load offensively. </p>
        
        <p>Houston coach Stephen Silas said Houston's defensive game plan was good, but there was “just too much Luka.”</p>

        <p>“I'm not sure that he made an easy shot,” Silas said. “We made every shot hard, and that's the greatness of a great player. … That's what Luka does.”</p>
        
    </div>;
}

export default NewsText