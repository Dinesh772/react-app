import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { toJS } from "mobx";
import { gridStore } from "../GridStore";
import { observer } from "mobx-react";

// const data = [
//   {
//     name: 'Attempt 1',  pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Attempt 2',  pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Attempt 3',  pv: 4800, amt: 2290,
//   },
//   {
//     name: 'Attempt 4',  pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Attempt 5',  pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Attempt 6',  pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Attempt 8',  pv: 4300, amt: 2100,
//   },
//   {
//     name: 'Attempt 9',  pv: 4300, amt: 2100,
//   },
//   {
//     name: 'Attempt 10',  pv: 4300, amt: 2100,
//   },
//   {
//     name: 'Attempt 11',  pv: 4300, amt: 2100,
//   },
//   {
//     name: 'Attempt 12',  pv: 4300, amt: 2100,
//   },
// ];
@observer
export default class Example extends PureComponent {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/1p40zzfe/';

  state = {
    opacity: {
      pv: 1,
    },
  };

  handleMouseEnter = (o:any) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  }

  handleMouseLeave = (o:any) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  }

  render() {
    const { opacity } = this.state;
    const data=toJS(gridStore.gridStatsData)
    console.log(data)
    return (
      <div className='pt-10 '>
        <p className='text-xl pl-20 pb-20'>Check your Performance Score here after Every attempt !</p>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 0, right: 30, left: 30, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Levels', angle: -90, position: 'insideLeft',fill:'gray'}} />
          <Tooltip />
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
          <Line type="monotone" dataKey="Level" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        <p className="notes">Tips: Hover the Graph !</p>
      </div>
    );
  }
}
