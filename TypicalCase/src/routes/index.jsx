/*
* 路由表
* */
import React from "react";
import { Router, Route } from "mirrorx";
import Layout from "layout";
import BDM from "modules/bdm/router";
import MST from "modules/mst/router";
import PPM from "modules/ppm/router";
import OL from 'modules/orderList/router';
import OE from 'modules/orderEdit/router';

const App = () => (
  <Router>
    <div>
      {/* 单表路由 */}
      <Route path="/bdm" component={BDM} />
      {/* 主子表路由 */}
      <Route path="/mst" component={MST} />
      {/* 树表路由 */}
      <Route path="/ppm" component={PPM} />
      {/* 订单管理 */}
      <Route path="/ol" component={OL} />
      {/* 订单编辑 */}
      <Route path="/oe" component={OE} />
    </div>
  </Router>
);

export default App;
