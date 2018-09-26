import React from 'react';
import withDocsLayout from '@shared/withDocsLayout';
import Highlight from '@shared/Highlight';

function Typography() {
  return (
    <div>
      <h1>Fonts</h1>
      <p>
        <a href="https://material.io/guidelines/style/typography.html">
          Roboto
        </a>{' '}
        fonts are recommended, you should include them by yourself. Please,
        don't forget to include different font weights in your imports.
      </p>
      <Highlight
        syntax="xml"
        children={
          '<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">\n' +
          '<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500" rel="stylesheet">'
        }
      />

      <h1 className="mt-5">Headings</h1>
      <div className="text-right">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <h3>
          Heading <small className="text-muted">with muted text</small>
        </h3>
      </div>

      <h1>Sample paragraphs</h1>
      <p className="lead mt-3">
        Lead paragraph here. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <h1>Quotes</h1>
      <blockquote className="blockquote">
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </div>
  );
}

export default withDocsLayout('Typography')(Typography);
