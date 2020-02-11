import React from 'react';
import { Column } from '@antv/g2plot'

class Graph extends React.Component {
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
            return { 省份: el.provinceShortName, value: el.curedCount }
          }
          else
            return;
        })
        data = data.filter(el => el !== undefined)
        data = data.sort((a,b)=>b.value-a.value)
        console.log(data)
        const columnPlot = new Column("canvas", {
          data,
          title:{text:'各省份确诊人数',visible:true},
          xField: '省份',
          yField: 'value',

        })
        columnPlot.render();
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

export default Graph;
