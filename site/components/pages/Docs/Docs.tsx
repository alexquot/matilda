import * as React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { Buttons, Cards, Usage } from './chapters';

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
          <Usage />
          <hr className="my-6" />
          <Buttons />
          <hr className="my-6" />
          <Cards />
        </Container>
      </div>
    );
  }
}
