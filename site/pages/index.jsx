import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import withLayout from '@shared/withLayout';

function Index() {
  return (
    <div>
      <Jumbotron fluid className="bg-dark text-center">
        <h1 className="display-4 font-weight-light text-white">Matilda</h1>
        <p
          className="font-weight-light text-white"
          style={{ fontSize: '18px' }}
        >
          Material Design theme for Bootstrap 4
        </p>

        <a
          href="docs/usage"
          className="btn btn-outline-light border-white text-white rounded-0 mt-3"
        >
          Discover
        </a>
      </Jumbotron>
      <Container>
        <h1 className="mt-5">About</h1>
        <p>
          Matilda is a Material Design theme for Bootstrap 4. The goals of this
          project are to provide a theme that looks similar to Material
          Guidelines, but not to overdose it with complexity. There's also won't
          be any additional JavaScript plugins, so you can use Matilda
          flawlessly with any framework like Angular or React. Currently it's in
          early stage development, but one can find it's quite usable already.
        </p>
        <p>
          For further reading please continue to the <a href="docs/usage">Docs</a>{' '}
          page.
        </p>
        <h1 className="mt-5">Helping the project</h1>
        <p>
          It would be nice to see any activity in project's GitHub page, feel
          free to fill issues and create pull requests. Project stars are also
          hugely respected.
        </p>
      </Container>
    </div>
  );
}

export default withLayout(Index);
