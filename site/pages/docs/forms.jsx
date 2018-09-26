import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'reactstrap';
import withDocsLayout from '@shared/withDocsLayout';
import Demo from '@shared/Demo';

const DemoWrapper = ({ children }) => (
  <Row noGutters>
    <Col lg={7} className="mx-auto">
      {children}
    </Col>
  </Row>
);

DemoWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

function Forms() {
  return (
    <div>
      <h1>Basics</h1>
      <p>
        Basic form controls don't have any complex styling, borders or floating
        labels. It makes easy to use them as building blocks while creating
        other components.
      </p>
      <Demo Wrapper={DemoWrapper}>
        <input className="form-control" placeholder="Basic .form-control" />
        <Card className="mt-2 px-2">
          <input
            className="form-control form-control-sm"
            placeholder="Any questions?"
          />
        </Card>
        <Card className="mt-3 px-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text pl-1">
                <i className="material-icons text-muted">search</i>
              </div>
            </div>
            <input
              className="form-control form-control-lg"
              placeholder="Search"
            />
          </div>
        </Card>
      </Demo>

      <h1 className="mt-5">Materialized</h1>
      <p>
        One can add simple accent line and line ripple by adding{' '}
        <code>.form-underline</code>
        element. You don't need additional classes for small or large inputs.
      </p>
      <Demo Wrapper={DemoWrapper}>
        <div className="form-row">
          <div className="col-lg mb-3 mb-lg-0">
            <input
              className="form-control"
              placeholder="Input with a line under"
            />
            <div className="form-underline" />
          </div>
          <div className="col-lg">
            <input
              className="form-control"
              placeholder="Disabled input"
              disabled
            />
            <div className="form-underline" />
          </div>
        </div>
      </Demo>

      <p>
        Add a custom styled label for the float label element with a
        <code>.form-float-container</code> and <code>.form-float</code>{' '}
        elements. You can also use <code>.form-float-container-filled</code>{' '}
        class to make your text field look filled.
      </p>

      <Demo Wrapper={DemoWrapper}>
        <div className="form-row mb-3">
          <div className="col-lg mt-auto">
            <input className="form-control" placeholder="Underlined" />
            <div className="form-underline" />
          </div>
          <div className="col-lg">
            <div className="form-float-container">
              <div className="input-group">
                <input className="form-control" placeholder=" " />
                <div className="form-float">With float label</div>
                <div className="form-underline" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-lg mb-3 mb-lg-0">
            <div className="form-float-container form-float-container-filled">
              <div className="input-group">
                <input className="form-control" placeholder=" " />
                <div className="form-float">Filled input</div>
                <div className="form-underline" />
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="form-float-container form-float-container-filled">
              <div className="input-group">
                <input
                  className="form-control is-invalid"
                  placeholder=" "
                  defaultValue="Very wrong"
                />
                <div className="form-float">.is-invalid + icon</div>
                <div className="input-group-append">
                  <div className="input-group-text px-3">
                    <i className="material-icons">close</i>
                  </div>
                </div>
                <div className="form-underline" />
              </div>
            </div>
          </div>
        </div>
      </Demo>
    </div>
  );
}

export default withDocsLayout('Forms')(Forms);
