import React,  {Component} from 'react'
import { useContext } from 'react';
import {Card} from 'antd'
//按需导入
import echarts from 'echarts/lib/echarts'
//导入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'

import { StateProvider, store } from "../store";
import dataGameflow from '../data/gameflow'

function LineGameflow() {
    const {state, dispatch} = useContext(store);
    
    const getOption = () => {
        const plays = dataGameflow.plays || [];
        var homescore = [];
        var awayscore = [];
        var texts = [];
        var xaxis = [];
        var i = 1;
        
        for (const play of plays) {
            homescore.push(play.homeScore);
            awayscore.push(play.awayScore);
            xaxis.push(play.sequenceNumber);
            ++i;
        }
        
        let option = {
            title: {  //标题
                text: 'Gameflow',
                x: 'center',
                textStyle: { //字体颜色
                    color: '#ccc'
                }
            },
            legend: {
                data: ['homescore', 'awayscore'],
                top: 20,
                right: 50,
            },
            tooltip:{ //提示框组件
                trigger: 'axis'
            },
            xAxis: { //X轴坐标值
                data: xaxis
            },
            yAxis: {
                type: 'value' //数值轴，适用于连续数据
            },
            series : [
                {
                    name:'homescore', //坐标点名称
                    type:'line', //线类型
                    color: state.homeColor,
                    data: homescore //坐标点数据
                },
                {
                    name:'awayscore', //坐标点名称
                    type:'line', //线类型
                    color: state.awayColor,
                    data: awayscore  //坐标点数据
                }
            ]
        }
        return option;
    }

    
    return (
        <Card.Grid className="line_a">
            <ReactEcharts option={getOption()} />
        </Card.Grid>
    )
}

export default LineGameflow;