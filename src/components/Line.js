import React,{Component} from 'react'
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

class LineGameflow extends Component {

    componentWillMount(){
        // echarts.registerTheme("ThemeStyle", echartTheme) //注入主题
    }

    getOption = ()=>{
        let option = {
            title: {  //标题
                text: 'Gameflow',
                x: 'center',
                textStyle: { //字体颜色
                    color: '#ccc'
                }
            },
            tooltip:{ //提示框组件
                trigger: 'axis'
            },
            xAxis: { //X轴坐标值
                data: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
            },
            yAxis: {
                type: 'value' //数值轴，适用于连续数据
            },
            series : [
                {
                    name:'订单量', //坐标点名称
                    type:'line', //线类型
                    data:[1000, 1500, 2000, 3000, 2500, 1800, 1200] //坐标点数据
                }
            ]
        }
        return option;
    }

    render() {
        return (
            <Card.Grid className="line_a">
                <ReactEcharts option={this.getOption()} theme="ThemeStyle" />
            </Card.Grid>
        )
    }
}
export default LineGameflow;