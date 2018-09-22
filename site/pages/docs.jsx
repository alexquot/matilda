import Cards from '@components/docs/Cards';
import React from 'react';
import Buttons from '@components/docs/Buttons';
import withLayout from '@shared/withLayout';
import Usage from '@components/docs/Usage';
import { Container, Jumbotron } from 'reactstrap';

function Index() {
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

export default withLayout(Index);
