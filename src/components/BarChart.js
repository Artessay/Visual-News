import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import boxscore from '../data/boxscore';
// import { StateProvider } from '../store';

function Overview() {
    const {state, dispatch} = useContext(store);

    const players = boxscore.athletes || [];
    console.log(players);
    var athleteName = [];
    var minute = [];
    for (const play of players) {
        athleteName.push(play.athlete.displayName);
        minute.push(play.stats[0]);
    }
    
    const getOption = () => {
        return {
            title: [
                {
                    text: state.homeTeam + " 队员出场时间",
                    left: 'center',
                }
            ],
            xAxis: {
                type: 'category',
                data: athleteName,
                axisLabel:{
                    interval: 0,
                    rotate: 30,
                },
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: minute,
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />
    </div>
}

export default Overview;
