import './App.css';
import Headline from './components/Headline';
// import Overview from './components/Overview';


import clsx from 'clsx';
import {makeStyles} from "@material-ui/core";

// 这是JSS的写法，相当于声明了一些css的类
const useStyles = makeStyles(theme => ({
  // root: {
  //     position: 'relative',
  //     width: '100vw',
  //     height: '100vh',
  //     overflow: 'hidden',
  // },
  view: {
      border: '1px solid black',
      borderRadius: '5px',
  },
  headline: {
      position: 'absolute',
      top: 150,
      height: 100,
      left: 300,
      right: 300,
  },
  videoPanel: {
      position: 'absolute',
      top: 180,
      bottom: 70,
      left: 70,
      width: 100,
  },
  controlPanel: {
      position: 'absolute',
      top: 70,
      height: 100,
      left: 70,
      width: 100,
  },
  detailView: {
      position: 'absolute',
      bottom: 70,
      height: 320,
      left: 180,
      right: 70,
  },
}))

function App() {
  // 使用上述的css样式
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Basketball Visual News</h1>
        <div class="showTime" onLoad={showTime()}></div>
      </header>
      <body>
        <div class="sidebar">
          <br></br>
          <h1>导航栏</h1>
        </div>
        <div className='view'>
          <div  className={clsx(classes.view, classes.headline)}>
            <Headline></Headline>
          </div>
          {/* <div  className={clsx(classes.view, classes.videoPanel)}>
            <Headline></Headline>
          </div> */}
        </div>
      </body>
    </div>
  );
}

function showTime() {
  var t = null;
  t = setTimeout(time, 1000); //开始运行
  function time() {
    clearTimeout(t); //清除定时器
    var dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours(); //获取时
    var m = dt.getMinutes(); //获取分
    var s = dt.getSeconds(); //获取秒
    document.querySelector(".showTime").innerHTML =
      "当前时间：" + y + "年" + mt + "月" + day + 
      "-" + h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
  }
}

export default App;
