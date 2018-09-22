import createHashHistory from 'history/createHashHistory';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore, RouterStore } from 'mobx-react-router';
import * as React from 'react';
import { Route, Router, Switch } from 'react-router';
import { Container } from 'reactstrap';
import { Footer } from './Footer';
import { Header } from './Header';
import { Docs, Welcome } from './pages/index';

const hashHistory = createHashHistory();
const routerStore = new RouterStore();
const history = syncHistoryWithStore(hashHistory, routerStore);

const stores = {
  routerStore: routerStore
};

export class App extends React.Component {
  public render() {
    return (
      <Provider {...stores}>
        <Router history={history}>
          <Route
            render={() => (
              <div className="d-flex flex-column h-100">
                <div>
                  <Header />
                  <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/docs" component={Docs} />
                  </Switch>
                </div>
                <div className="mt-auto">
                  <Container>
                    <Footer />
                  </Container>
                </div>
              </div>
            )}
          />
        </Router>
      </Provider>
    );
  }
}
