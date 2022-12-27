import './App.css';

function App() {
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
        <div>
          
        </div>
        <div class="mainbox">
          <div class="column">
            <div class="panel world">
              <h2>幸福指数世界地图</h2>
              <div class="chart"></div>
              <div class="panel-footer"></div>
            </div>

            <div class="panel pie">
              <h2>幸福指数-GDP相关性图</h2>
              <div class="chart"></div>
              <div class="panel-footer"></div>
            </div>

            <div class="panel river">
              <h2>各地区幸福指数分布图</h2>
              <div class="chart"></div>
              <div class="panel-footer"></div>
            </div>
          </div>

          <div class="column">
            <div class="panel bar">
              <h2>幸福指数柱状图</h2>
              <div class="chart"></div>
              <div class="panel-footer"></div>
            </div>

            <div class="panel line">
              <h2>幸福指数聚类分布曲线</h2>
              <div class="chart"></div>
              <div class="panel-footer"></div>
            </div>

            <div class="panel heatmap">
              <h2>二元变量相关分析</h2>
              <div class="chart"></div>
              <div class="panel-footer"></div>
            </div>
          </div>
        </div>

        {/* <section class="box">
          <div class="panel full">
            <h2>2021年各地区幸福指数分布</h2>
            <div class="chart"></div>
            <div class="panel-footer"></div>
          </div>
        </section>

        <section class="box">
          <div class="panel full">
            <h2>各影响因素的KMEANS聚类分析（K=3）</h2>
            <div class="chart">
              <div class="column">
                <div class="subchart ladder_score"></div>
              </div>
              <div class="column">
                <div class="subchart2 healthy_life_expectancy"></div>
                <div class="subchart2 freedom_to_make_life_choices"></div>
              </div>
              <div class="column">
                <div class="subchart2 generosity"></div>
                <div class="subchart2 social_support"></div>
              </div>
              <div class="column">
                <div class="subchart2 perceptions_of_corruption"></div>
                <div class="subchart2 logged_gdp_per_capita"></div>
              </div>
            </div>
            <div class="panel-footer"></div>
          </div>
        </section>

        <section class="box">
          <div class="panel full">
            <h2>二元变量散点图</h2>
            <div class="select">
              <label for="xAxis">Choose xAxis:</label>
              <select id="xAxis" name="xAxis">
                <option value="0" selected>freedom</option>
                <option value="1">generosity</option>
                <option value="2">life expectancy</option>
                <option value="3">ladder score</option>
                <option value="4">gdp</option>
                <option value="5">negative</option>
                <option value="6">corruption</option>
                <option value="7">positive</option>
                <option value="8">social support</option>
                <option value="9">year</option>
              </select>

              <label for="yAxis">Choose yAxis:</label>
              <select id="yAxis" name="yAxis">
                <option value="10">freedom</option>
                <option value="11" selected>generosity</option>
                <option value="12">life expectancy</option>
                <option value="13">ladder score</option>
                <option value="14">gdp</option>
                <option value="15">negative</option>
                <option value="16">corruption</option>
                <option value="17">positive</option>
                <option value="18">social support</option>
                <option value="19">year</option>
              </select>
            </div>

            <div class="chart dot"></div>
            <div class="panel-footer"></div>
          </div>
        </section>

        <section class="box">
          <div class="panel hm">
            <h2>二元变量相关性分析</h2>
            <div class="chart"></div>
            <div class="panel-footer"></div>
          </div>
        </section> */}
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
