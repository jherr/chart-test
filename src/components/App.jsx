import React from 'react';
import { VictoryLineChart } from 'victory-composed';

export default class App extends React.Component {
  render() {
    const series = [
      {
        data: [
          { x: new Date(1990, 1, 1), y: 100 },
          { x: new Date(1992, 1, 1), y: 200 },
          { x: new Date(1994, 1, 1), y: 300 },
          { x: new Date(1996, 1, 1), y: 400 }
        ]
      }
    ]
    return (
      <div>
        <VictoryLineChart
          series={series}
          xAxis={{
            tickFormat: (x) => (new Date(x)).getYear()
          }}
          />
      </div>
    );
  }
}
