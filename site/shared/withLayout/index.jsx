import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import ignoreEmptyHref from './ignoreEmptyHref';
import '../../../scss/matilda.scss';

export default function (Component) {
  return class WithLayout extends React.Component {
    componentDidMount() {
      ignoreEmptyHref();
    }

    render() {
      return (
        <div className="d-flex flex-column h-100">
          <Head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Matilda</title>
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;subset=cyrillic"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto+Mono"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
          </Head>
          <div>
            <Header />
            <div>
              <Component {...this.props} />
            </div>
          </div>
          <div className="mt-auto">
            <Container>
              <Footer />
            </Container>
          </div>
        </div>
      );
    }
  };
}
