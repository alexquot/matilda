import * as React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { Demo } from '../../shared';

export class Docs extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="bg-dark py-5">
          <Container>
            <h1 className="display-4 text-white">Docs</h1>
          </Container>
        </Jumbotron>
        <Container className="pt-4 pb-5">
          <h1>Buttons</h1>
          <p>
            Buttons have the ripple effect. You can also use{' '}
            <code>.ripple</code> class and{' '}
            <code>ripple($color: $black)</code>{' '}
            mixin in your SASS code.
          </p>
          <Demo isCentered>
            <button className="m-1 btn btn-primary">Button</button>
            <button className="m-1 btn btn-outline-primary">Outline</button>
            <button className="m-1 btn btn-contained-primary">Contained</button>
            <button className="m-1 btn btn-contained-primary elevation-2">
              Raised
            </button>
          </Demo>
          <Demo isCentered>
            <div className="btn-group">
              <button className="btn btn-outline-dark">Left</button>
              <button className="btn btn-outline-dark border-left-0 border-right-0">
                Middle
              </button>
              <button className="btn btn-outline-dark">Right</button>
            </div>
          </Demo>
        </Container>
      </div>
    );
  }
}
