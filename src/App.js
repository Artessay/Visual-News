import './App.css';

function App() {
  return (
    <header>
      <h1>World Happiness Report</h1>
      <div class="showTime" onLoad={showTime()}></div>
    </header>
    // <h1>Hello World</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
