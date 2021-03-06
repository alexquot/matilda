import React from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import './withDocsLayout.scss';
import withLayout from './withLayout';

const chapters = [
  {
    name: 'Usage',
    href: 'docs/usage'
  },
  {
    name: 'Buttons',
    href: 'docs/buttons'
  },
  {
    name: 'Cards',
    href: 'docs/cards'
  },
  {
    name: 'Forms',
    href: 'docs/forms'
  },
  {
    name: 'Indicators',
    href: 'docs/indicators'
  },
  {
    name: 'Typography',
    href: 'docs/typography'
  },
  {
    name: 'Content',
    href: 'docs/content'
  }
];

const withDocsMarkup = ({ header, pathname }) => Component => props => {
  const openIndex = chapters.findIndex(ch => ch.name === header);
  const next =
    openIndex >= 0 && openIndex + 1 < chapters.length
      ? chapters[openIndex + 1]
      : undefined;

  return (
    <div className="DocsLayout">
      <Jumbotron fluid className="bg-dark py-5">
        <Container>
          <h1 className="display-4 text-white">{header}</h1>
        </Container>
      </Jumbotron>
      <Container className="pt-4">
        <Row>
          <Col xs={8} md={9}>
            <Component {...props} />
          </Col>
          <Col xs={4} md={3}>
            <div className="side-navigation">
              {chapters.map(ch => (
                <a
                  href={ch.href}
                  key={ch.name}
                  className={pathname.includes(ch.href) ? 'active' : undefined}
                >
                  {ch.name}
                </a>
              ))}
            </div>
          </Col>
        </Row>
        {next && (
          <div className="next-link-wrapper mt-3">
            <a href={next.href}>
              <span>Next:</span>
              {next.name}
            </a>
          </div>
        )}
      </Container>
    </div>
  );
};

// This HOC uses another one, because withLayout and withDocsLayout
// both have to be the top one HOC. The first one is because
// of the markup, and the second one because it needs access to
// getInitialProps method.
export default header => Component =>
  class WithDocsLayout extends React.Component {
    static propTypes = {
      // going to be passed by Next.js
      pathname: PropTypes.string
    };

    static defaultProps = {
      pathname: ''
    };

    static async getInitialProps({ pathname }) {
      return { pathname };
    }

    render() {
      const { pathname } = this.props;
      return React.createElement(
        withLayout(withDocsMarkup({ header, pathname })(Component)),
        this.props
      );
    }
  };
