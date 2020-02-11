import React from 'react';
import './App.css';
import { Column } from '@antv/g2plot'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
  }
  componentDidMount() {
    let url = 'https://lab.isaaclin.cn/nCoV/api/area';
    fetch(url)
      .then(re => re.json())
      .then(re => {
        console.log(re)
        let data = re.results.map((el) => {
          if (el.country == '中国') {
            return { type: el.provinceShortName, value: el.curedCount }
          }
          else
            return;
        })
        data = data.filter(el => el !== undefined)
        console.log(data)
        const barPlot = new Column("canvas", {
          data,
          xField: 'type',
          yField: 'value',

        })
        barPlot.render();
        return;
      })
      .catch((er) => console.log(er));
  }
  render() {
    return (
      <div>
        <div id="canvas" style={{ height: '1500px', width: '100%' }}></div>
      </div>
    );
  }
}

export default App;
