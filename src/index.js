import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import store from './store'

import './index.css';
import Step1Container from './container/Step1Container';
import Step2Container from './container/Step2Container';
import Step3Container from './container/Step3Container';
import Step4Container from './container/Step4Container';

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Step1Container} />
          <Route exact path="/step2" component={Step2Container} />
          <Route path="/step3" component={Step3Container} />
          <Route path="/step4" component={Step4Container} />
        </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
