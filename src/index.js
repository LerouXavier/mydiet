import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {App} from './App';
import './axios.config';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
