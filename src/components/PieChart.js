import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";

function PieChart() {
    const {state, } = useContext(store);


    const getOption = () =>{
        return{
            title: {
                top: 0,
                left: 'center',
                text: state.athlete +  " 进球得分情况",
                textStyle:{
                    fontSize:15,
                    color:'#1C282E',
                } 
            }, 
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '85%',
                left: 'center'
            },
            series: [
                {
                    name: '进球得分',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 50,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 11*2, name: 'short'},
                        {value: 6*3, name: 'long'},
                        {value: 10*1, name: 'penalty'},
                    ]
                }
            ]
        };
    }
    // const onclick={
    //     'click':onByCalendarClick
    // }
    // function  onByCalendarClick(e) {
    //     //console.log(e.name);
    //        dispatch({
    //         type: 'year',
    //         payload: e.name,
    // })   
    //  } 
    return <ReactEcharts option={getOption()}  onEvents={onclick} />
}

export default PieChart;