import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { ignoreEmptyHref } from './ignoreEmptyHref';

import './index.scss';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
ignoreEmptyHref();
