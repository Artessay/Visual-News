import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/china';
import * as echarts from 'echarts';

function PieChart() {
    const {state, dispatch} = useContext(store);
    const data = state.data[state.position] || [];


    const getOption = () =>{
        return{
            title: {
                top: 5,
                left: 'center',
                text: state.zwposition + state.date,
                textStyle:{
                    fontSize:15,
                    color:'#1C282E',
                } 
            }, 
            tooltip: {
                trigger: 'item'
            },
           // legend: {
               // top: '5%',
              //  left: 'center'
         //   },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
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
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 2013, name: '2013'},
                        {value: 2014, name: '2014'},
                        {value: 2015, name: '2015'},
                        {value: 2016, name: '2016'},
                        {value: 2017, name: '2017'}
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
    return <ReactEcharts option={getOption()} style={{height: '100%',width : '100%'}}  onEvents={onclick} />
}

export default PieChart;