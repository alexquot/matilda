import Highlight from '@shared/Highlight';
import * as React from 'react';

export default function() {
  return (
    <div>
      <h1>Usage</h1>
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

      <Highlight
        language="scss"
        children={`$placeholder-shown-selector: ':placeholder-shown';
$enable-ripple: true !default;
$font-size-xs: ($font-size-base * 0.75) !default;
$table-font: $font-weight-normal $font-size-sm $font-family-base !default;
$table-head-font: $font-weight-bold $font-size-xs $font-family-base !default;
$btn-text-transform: uppercase;
$form-float-above-top: 0.55rem;
$form-float-container-padding-y: 1.2rem;
$form-float-container-padding-x: 0.7rem;
$form-float-container-filled-bg: rgba(0, 0, 0, 0.05);
$code-bg: $light !default;
$code-padding: 0 0.2rem !default;
$code-border-radius: $border-radius !default;
$pre-bg: $light;
$pre-code-padding: 1rem !default;
$pre-code-border-radius: 0 !default;`}
      />
    </div>
  );
}
