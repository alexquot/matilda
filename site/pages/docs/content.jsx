import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'reactstrap';
import withDocsLayout from '@shared/withDocsLayout';
import Demo from '@shared/Demo';

function Content() {
  return (
    <div>
      <h1>Dynamic</h1>
      <p>TODO</p>

      <h1>Tables</h1>
      <Demo
        isCentered
        Wrapper={({ children }) => (
          <Row noGutters className="w-100">
            <Col lg={8}>{children}</Col>
          </Row>
        )}
      >
        <table className="table table-hover mt-4 bg-white elevation-2">
          <thead>
            <tr>
              <th>#</th>
              <th>First name</th>
              <th>Last name</th>
              <th>IP address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Jarrad</td>
              <td>Worcs</td>
              <td>53.41.171.32</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Marco</td>
              <td>Misselbrook</td>
              <td>30.117.137.108</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mame</td>
              <td>Say</td>
              <td>187.139.217.120</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Leodora</td>
              <td>Pask</td>
              <td>71.46.153.146</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Egan</td>
              <td>Allewell</td>
              <td>191.59.213.252</td>
            </tr>
          </tbody>
        </table>
      </Demo>
    </div>
  );
}

export default withDocsLayout('Content')(Content);
