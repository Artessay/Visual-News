import './App.css';
import React, { useContext } from 'react'
import Headline from './components/Headline';
import { Input } from 'antd';
import { store } from "./store";
import clsx from 'clsx';
import {makeStyles} from "@material-ui/core";
import Sidebar from './components/Sidebar';
import LineGameflow from './components/Line';
import ColorButtonHome from './components/ColorButtonHome';
import ColorButtonAway from './components/ColorButtonAway';
import NewsText from './components/NewsText';
import PieChart from './components/PieChart';
import Overview from './components/BarChart';
import BoxTable from './components/Table';
import PlayerSelector from './components/SelectPlayer';
import boxscore from './data/boxscore';

// 这是JSS的写法，相当于声明了一些css的类
const useStyles = makeStyles(theme => ({
  // root: {
  //     position: 'relative',
  //     width: '100vw',
  //     height: '100vh',
  //     overflow: 'hidden',
  // // },
  homeSelect: {
    position: 'absolute',
    left: 30,
  },
  awaySelect: {
    position: 'absolute',
    right: 30,
  },
  playerSelect: {
    position: 'absolute',
    top: 450,
    left: 0,
    width: '100%',
  },
  view: {
      border: '1px solid black',
      borderRadius: '5px',
  },
  headline: {
      position: 'relative',
      top: 20,
      height: 80,
      width: 750,
      left: 200,
      right: 300,
      textAlignVertical: 'center',
  },
  videoPanel: {
      position: 'relative',
      top: 120,
      left: 50,
      width: 1000,
  },
  gameflow: {
      position: 'absolute',
      background: '#f9f8f4',
      top: 200,
      left: 650,
      width: 400,
  },
  newsText: {
    position: 'relative',
    top: 150,
    left: 200,
    width: 750,
    // backgroundColor: 'gray'
  },
  newsText2: {
    position: 'relative',
    top: -50,
    left: 200,
    width: 750,
    textAlign: 'left',
    // backgroundColor: 'gray'
  },
  newsText3: {
    position: 'relative',
    top: 50,
    left: 200,
    width: 750,
    textAlign: 'left',
    // backgroundColor: 'gray'
  },
  newsText4: {
    position: 'relative',
    top: 100,
    left: 200,
    width: 750,
    textAlign: 'left',
    // backgroundColor: 'gray'
  },
  playerPhoto: {
    position: 'relative',
    top: 150,
    left: 200,
    width: '30%',
  },
  pieChart: {
    position: 'relative', //'absolute',
    top: -100, //1080,
    left: 450,
    width: '60%',
    // height: '60%',
  },
  barChart: {
    position: 'relative',
    top: 0,
    left: 75,
    width: 1000
  },
  boxTable: {
    position: 'relative',
    top: 80,
    left: 60,
    width: '100%'
  },
}))

function inputSentence() {
  const {state, dispatch} = useContext(store);

  const inputs = useRef(null)
  const changes = (e) => {
    state.isSearched = true
    state.insight = inputs.current.input.value
  }
}

function App() {
  // 使用上述的css样式
  const classes = useStyles();

  const {state, dispatch} = useContext(store);

  let m = new Map();
  const athletes = boxscore.athletes || [];
  athletes.forEach(element => {
    m.set(element.athlete.displayName, element.athlete.headshot.href)
  });

  // // 导入视频
  // const http = require('stream-http');
  // const fs = require('fs');
  // http.createServer(
  //   function(__req, __res) {
  //     fs.createReadStream('./video/cast1.mp4').pipe(__res)
  //   }.listen(3000, function() {
  //     console.log('server is running at http://localhost:3000')
  //   })
  // )

  return (
    <div className="App">
      <header className="App-header">
        <h1>Basketball Visual News</h1>
        <div class="showTime" onLoad={showTime()}></div>
      </header>
      <body>
        <div class="sidebar">
          <Sidebar>
          </Sidebar>
          {/* <form>
            <input 
              type="text"
              value="insight"
              // onChange={onChange}
            />
          </form> */}
                    
          {/* <div>
            <h3>观点</h3>
            <input name='insight'></input>
            <input type="submit" value="生成"></input>
          </div> */}
          <br></br>
          <h3>Color Selection</h3>
          <div className={clsx(classes.homeSelect)}>
            <ColorButtonHome></ColorButtonHome>
          </div>
          <div className={clsx(classes.awaySelect)}>
            <ColorButtonAway></ColorButtonAway>
          </div>
          <div className={clsx(classes.playerSelect)}>
            <h3>Player Selection</h3>
            <PlayerSelector></PlayerSelector>
          </div>
        </div>
          
        <div className='view'>
          <div  className={clsx(classes.headline)}>
            <Input
              type='text'
              onChange={(e) => {
                  dispatch({
                    type: 'searchNews',
                    payload: e.value,
                })  
              }}
              placeholder={state.insight}
            ></Input>
          </div>
          
          {/* <form>
            <input
              type="text" 
              stype="width: '100%'; height: 100px; border-radius: 10px"
            />
          </form> */}
          {/* <input type="text" stype="width: 750px; height: 100px; border-radius: 10px"></input> */}
          {/* <div className={clsx(classes.view, classes.headline)}>
            <input name='insight' style="width: 80%" />
            <input type="submit" width='20%' value="生成"></input>
           <Headline width='100%'></Headline> 
          </div> */}

          {
            state.isSearched 
            ? 
            <div>
              <div className={clsx(classes.view, classes.videoPanel)}>
                <video 
                  src={require('./video/game.mp4')} 
                  controls // 控制panel current
                  width='100%'
                >
                    video
                </video>
              </div>
              <div className={clsx(classes.view, classes.gameflow)}>
                <LineGameflow></LineGameflow>
              </div>
              <div className={clsx(classes.newsText)}>
                <NewsText margin='10'></NewsText>
              </div>
              <div className={clsx(classes.playerPhoto)}>
                <img src={m.get(state.athlete)} alt='' width='100%'></img>
              </div>
              <div className={clsx(classes.pieChart)}>
                <PieChart></PieChart>
              </div>
              <div className={clsx(classes.newsText2)}>
                
              He scored a career-high 51 against the Clippers on Feb. 10, 2022.
<br></br>

                Dallas coach Jason Kidd called Doncic’s 50 points “a great Christmas gift on a long road trip.”
<br></br>
                Spencer Dinwiddie and Davis Bertans each scored 11 points for Dallas, which shot 45% and made 16 of 44 3s.
<br></br>

                Jabari Smith Jr. finished with 24 points and 10 rebounds, Jalen Green added 23 points and eight rebounds, and Alperen Sengun had 19 points and eight rebounds for Houston, which lost its fifth straight.
<br></br>

                “Just coming in and trying to get back on track, get back to playing well,” Smith said. “Our record’s not well, but we know when we play good and we know when we play bad. These last couple games we feel like we haven’t played like us, so the focus was getting back to us and playing how we play.”
              </div>

              <div className={clsx(classes.barChart)}>
                <Overview></Overview>
              </div>

              <div className={clsx(classes.newsText3)}>
              Houston coach Stephen Silas said Houston’s defensive game plan was good, but there was “just too much Luka.”


“I’m not sure that he made an easy shot,” Silas said. “We made every shot hard, and that’s the greatness of a great player. … That’s what Luka does.”
<br></br>

Tied at 94 with 7 1/2 minutes remaining, the Mavs used an 11-3 run to open up an eight-point lead on a 3-pointer by Doncic, who blew a kiss to the crowd. The Rockets responded with seven straight points to cut the lead to 105-104 on Sengun’s layup with 3:13 left.
<br></br>

After Bertans hit a 3 to up the lead to four, Smith cut the lead to two with a jumper with a 1 ½ minutes remaining. The two teams traded turnovers and missed shots before Doncic nailed a 3-pointer with 18 seconds left to give the Mavs a five-point lead.
<br></br>

“We swing the ball, and Tim (Hardaway Jr.) redrives it from the corner and finds Luka wide open,” Kidd said of Doncic’s 3 to seal the win. “Luka does the rest. When you’re hot like that, sometimes you don’t have to move the ball. Someone else did all the work for him, and the ball found him.”
                </div>

              <div  className={clsx(classes.boxTable)}>
                <BoxTable></BoxTable>
              </div>

              <div  className={clsx(classes.newsText4)}>
              Mavericks: Dorian Finney-Smith missed his second straight game with a right adductor strain. … Kemba Walker was out of the lineup Friday night due to left knee injury recovery. … Reggie Bullock left the game in the third quarter with a neck strain.
<br></br>
              Rockets: Garrison Mathews (illness) returned to the lineup on Friday after missing the last three games. He was scoreless in 12 minutes. … Jae’Sean Tate (ankle) could return soon, Silas said. “I don’t have a timetable, days or whatever, but it looks like it’s getting closer to days than weeks,” Silas said. … Eric Gordon was out of the lineup Friday with a bruised left thumb.
                </div>
            </div> 
            : 
            <div></div>
          }
          
          <div>
            <br></br>
          </div>
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
