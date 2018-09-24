import React from 'react';
import Highlight from '@shared/Highlight';
import config from '@shared/config';
import withDocsLayout from '@shared/withDocsLayout';

function Usage() {
  return (
    <div>
      <h1>Installation</h1>
      <p>
        To begin with you need to install Matilda. It was released in npm under
        @albnnc/matilda package. If you want you can use jsDelivr CDN, go on
        right to the{' '}
        <a href="https://www.jsdelivr.com/package/npm/@albnnc/matilda">
          download page
        </a>
        . You can also try Matilda and copy-paste the stylesheet into your
        before all other stylesheets.
      </p>
      <Highlight
        language="xml"
        children={
          '<link rel="stylesheet" ' +
          'href="https://cdn.jsdelivr.net/npm/@albnnc/matilda/dist/matilda.css" />'
        }
      />
      <p>
        But if you want to customize it (e.g. change color palette) you need to
        install it and compile manually. Simply install it.
      </p>
      <Highlight
        language="bash"
        children="npm install --save @albnnc/matilda"
      />
      <p>And import in your SASS code.</p>
      <Highlight
        language="scss"
        children="@import '@albnnc/matilda/scss/matilda'"
      />

      <h1 className="mt-5">Customization</h1>
      <p>
        Matilda is a Bootstrap 4 theme. This means that you're able to use all
        the advantages of SASS variables and mixins. You can read more about the
        theming process{' '}
        <a href="https://getbootstrap.com/docs/4.0/getting-started/theming/">
          here
        </a>
        .
      </p>
      <p>
        There're also some new variables which were added for Matilda theming
        purpose. They are listed below and marked with{' '}
        <code>
          {'//'}
          &nbsp;Matilda
        </code>{' '}
        comment in code.
      </p>
      <Highlight
        language="scss"
        children={config.matildaVariables.join('\n').trim()}
      />
    </div>
  );
}

export default withDocsLayout('Usage')(Usage);
