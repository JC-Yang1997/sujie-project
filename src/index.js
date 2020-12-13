import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import { ConfigProvider, Breadcrumb } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import routes from './router'
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.less';

moment.locale('zh-cn');

class App extends React.Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Switch>
            {
              routes.map(item => <Route path={item.path} component={item.component} key={item.path} exact={item.exact} />)
            }
          </Switch>
        </BrowserRouter>
      </ConfigProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));