import React, { useContext } from 'react';
import { store } from "../store";
import boxscore from '../data/boxscore';

function PlayerSelector() {

    const {state, dispatch} = useContext(store);

    function  onByPlayerSelect(e) {
        console.log(e.target.value);
        dispatch({
            type: 'playerSelect',
            payload: e.target.value,
        })  
    }

    const athletes = boxscore.athletes || [];

    return (
        <select id="selectPlayer" name="playerName" width='100%' onChange={onByPlayerSelect}>
            {
                athletes.map(
                    item =>
                        <option value={item.athlete.displayName}>{item.athlete.shortName}</option>
                )
            }
        </select>
    ) 
}

export default PlayerSelector;