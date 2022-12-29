import React, { useContext } from 'react'
import {Card} from 'antd'
//导入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'

import { store } from "../store";
import dataGameflow from '../data/gameflow'

function LineGameflow() {
    const {state, } = useContext(store);
    
    const getOption = () => {
        const plays = dataGameflow.plays || [];
        var homescore = [];
        var awayscore = [];
        var texts = [];
        var xaxis = [];
        
        for (const play of plays) {
            homescore.push(play.homeScore);
            awayscore.push(play.awayScore);
            xaxis.push(play.sequenceNumber);
            texts.push(play.text);
        }
        
        
        let dotHtml1 = "<div text-align='right'>";    // 定义第一个数据前的圆点颜色
        var dotHtml2 = '</div>';    // 定义第二个数据前的圆点颜色

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
                show: true,
                showContent: true,
                alwaysShowContent: true,
                position: ['0%', '-20%'],
                trigger: 'axis',
                backgroundColor: '#f9f8f4',
                textStyle: {
                    color: '#000',     // 文字的颜色
                    // fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
                    // fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
                    // fontSize: '20',    // 文字字体大小
                    // lineHeight: '50',    // 行高 
                    textAlign: 'right',
                },
                formatter: function(arg) {
                    return (
                        dotHtml1 + 
                        'HOU: ' + arg[0].value + ' - DAL: ' + arg[1].value + '<br/>'
                        + texts[arg[0].dataIndex] + '<br/>'
                        + dotHtml2
                    )
                }
            },
            xAxis: { //X轴坐标值
                data: xaxis
            },
            yAxis: {
                type: 'value' //数值轴，适用于连续数据
            },
            data: {
                homescore: homescore,
                awayscore: awayscore,
                text: texts,
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