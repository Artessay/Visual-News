import React, { useContext } from 'react';
import { store } from "../store";

function NewsText() {
    const {state, } = useContext(store);

    return <div className='news'>
        {state.news} <br/>

        <p>Luka Doncic scored a season-high 50 points, including 17 in the fourth quarter, and the Dallas Mavericks held on to beat the Houston Rockets 112-106 on Friday night.</p>

        <p>Doncic, who also had 10 assists and eight rebounds, was 17 of 30 from the field, including 6 of 12 on 3-pointers. It was Doncic's second career 50-point game.</p>


        <p>Luka is Luka. He's the best player in the world. He showed that tonight, carrying the load offensively. </p>
        
        <p>Houston coach Stephen Silas said Houston's defensive game plan was good, but there was “just too much Luka.”</p>

        <p>“I'm not sure that he made an easy shot,” Silas said. “We made every shot hard, and that's the greatness of a great player. … That's what Luka does.”</p>

        <br></br>
        
    </div>;
}

export default NewsText