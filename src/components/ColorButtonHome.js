import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";

function ColorButtonHome() {

    const {state, dispatch} = useContext(store);
    
    const getOption = () =>{
        return{
                tooltip: {},
                left:'left',
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 35,
                        roam: true,
                        color:['#8E83BB'],
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
                            x: 100,
                            y: 10
                        }, {
                            value: 'blue',
                            name: '蓝色',
                            x: 100,
                            y: 60
                        }, {
                            value: 'yellow',
                            name: '黄色',
                            x: 100,
                            y: 110
                        }, {
                            value: 'green',
                            name: '绿色',
                            x:100,
                            y: 160
                        },{
                            value: 'black',
                            name: '黑色',
                            x: 100,
                            y: 210
                        }, {
                            value: 'pink',
                            name: '紫色',
                            x: 100,
                            y: 260
                        }, {
                            value:6,
                            name: '顺义区',
                            x: 100,
                            y: 310
                        }, {
                            value:7,
                            name: '天坛',
                            x: 100,
                            y: 360
                        }, {
                            value: 'green',
                            name: '万柳',
                            x: 100,
                            y: 410
                        }, {
                            value:9,
                            name: '万寿行宫',
                            x: 100,
                            y: 460
                        }, {
                            value:10,
                            name: '东四',
                            x: 100,
                            y: 510
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
            type: 'homeColorSelect',
            payload: e.value,
        })  
    }

    return <div id='home-color-button' style={{height: '100%',width : '100%'}}>
        <ReactEcharts option={getOption()} style={{height: '100%',width : '100%'}}  onEvents={onclick} />
    </div>
}

export default ColorButtonHome;