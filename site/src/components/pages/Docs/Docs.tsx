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
            General Bootstrap buttons can be used with their common classes. In
            addition there is <code>.btn-contained-*</code> classes to make{' '}
            <a href="https://material.io/design/components/buttons.html#contained-button">
              Material contained buttons
            </a>. Buttons have the ripple effect and you can also use{' '}
            <code>.ripple</code> class and <code>ripple($color: $black)</code>{' '}
            mixin in your SASS code. If you need to make raised button, then you
            should use a contained one and apply <code>.elevation-*</code> class
            to it.
          </p>
          <Demo isCentered>
            <button className="m-1 btn btn-primary">Button</button>
            <button className="m-1 btn btn-outline-primary">Outline</button>
            <button className="m-1 btn btn-contained-primary">Contained</button>
            <button className="m-1 btn btn-contained-primary elevation-2">
              Raised
            </button>
          </Demo>
          <p>
            It's easy to reach many Material Design variations of buttons with
            Bootstrap utility classes.
          </p>
          <Demo isCentered>
            <div className="m-1 btn-group bg-white">
              <button className="p-2 btn btn-outline-dark">
                <i className="material-icons align-middle">format_align_left</i>
              </button>
              <button className="p-2 btn btn-outline-dark border-left-0 border-right-0">
                <i className="material-icons align-middle">
                  format_align_center
                </i>
              </button>
              <button className="p-2 btn btn-outline-dark">
                <i className="material-icons align-middle">
                  format_align_right
                </i>
              </button>
            </div>
            <button className="m-1 btn btn-outline-dark rounded-0 border-dark">
              Follow
            </button>
          </Demo>
          <p>
            Matilda provides <code>.btn-rounded</code> class to make circle
            buttons. It works well with Material icons.
          </p>
          <Demo isCentered>
            <button className="m-1 btn btn-lg btn-contained-success elevation-6 btn-rounded">
              A
            </button>
            <button className="m-1 btn btn-contained-danger elevation-2 btn-rounded">
              <i className="material-icons">close</i>
            </button>
          </Demo>
        </Container>
      </div>
    );
  }
}
