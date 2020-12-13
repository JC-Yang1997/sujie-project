import React, { Component } from 'react'
import { Chart } from '@antv/g2';
// import { Button } from 'antd'
import './index.less'
import MockData from '../../mock/zhexiantu'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      MockData
    }
  }
  componentDidMount(){
    const chart = new Chart({
      container: 'zhexiantu-container',
      autoFit: true,
      height: 500,
    });
    chart.data(this.state.MockData);
    chart.scale('Number', {
      range: [0, 1],
      tickCount: 10,
      type: 'timeCat'
    });
    chart.scale('sales', {
      nice: true,
    });
    chart.axis('sales', {
      label: {
        formatter: text => {
          return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        }
      }
    });
    chart.tooltip({
      showCrosshairs: true,
    });

    // chart.annotation().dataMarker({
    //   position: ['2014-01', 1750],
    //   top: true,
    //   text: {
    //     content: '因政策调整导致销量下滑',
    //     style: {
    //       fontSize: 13,
    //     }
    //   },
    //   line: {
    //     length: 30,
    //   },
    // });
    chart.line().position('Data*sales');
    chart.area().position('Data*sales');
    chart.render();
  }
  render() {
    return (
      <div className="dashboard-page">
        <div className="page-title">Dashboard</div>
        <div className="card-content">
          <div className="card" style={{ backgroundColor: 'green', border: '1px solid green' }}>
            <div className="number">1235</div>
            <div className="title">xxxxx</div>
          </div>
          <div className="card" style={{ backgroundColor: 'red', border: '1px solid red' }}>
            <div className="number">456</div>
            <div className="title">xxxx2</div>
          </div>
        </div>
        <div className="antv-container">
          <div id="zhexiantu-container"></div>
        </div>
      </div>
    )
  }
}
