import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";

function ColorButtonAway() {

    const {state, dispatch} = useContext(store);
    
    const getOption = () =>{
        return{
                // tooltip: {},
                left:'right',
                animationDurationUpdate: 600,
                animationEasingUpdate: 'quinticInOut',
                color: [state.awayColor],
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 35,
                        roam: true,
                        label: {
                            show: true
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            fontSize: 20
                        },
                        data: [{
                            value: 'red',
                            name: '红色',
                            color: 'red',
                            x: 80,
                            y: 10
                        }, {
                            value: 'blue',
                            name: '蓝色',
                            color: 'blue',
                            x: 80,
                            y: 40
                        }, {
                            value: 'yellow',
                            name: '黄色',
                            color: 'yellow',
                            x: 80,
                            y: 70
                        }, {
                            value: 'green',
                            name: '绿色',
                            color: 'green',
                            x:80,
                            y: 100
                        },{
                            value: 'black',
                            name: '黑色',
                            color: 'black',
                            x: 80,
                            y: 130
                        }, {
                            value: 'purple',
                            name: '紫色',
                            color: 'purple',
                            x: 80,
                            y: 160
                        }
                    ],
                    }
                ]
            };
    }
    
    const onclick={
        'click':onByCalendarClick
    }

    function  onByCalendarClick(e) {
        console.log(e.value);
        dispatch({
            type: 'awayColorSelect',
            payload: e.value,
        })  
    }

    return (
        <div id='away-color-button'>
            <p>Away Team</p>
            <ReactEcharts option={getOption()} onEvents={onclick} />
        </div>
    ) 
}

export default ColorButtonAway;