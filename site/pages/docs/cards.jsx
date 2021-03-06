import React from 'react';
import withDocsLayout from '@shared/withDocsLayout';
import Demo from '@shared/Demo';

function Cards() {
  return (
    <div>
      <p>
        Cards have 2dp elevation by default if they are not nested. Base
        elements are available for use.
      </p>
      <Demo isCentered>
        <div className="card mb-3 mb-md-0" style={{ maxWidth: '400px' }}>
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  ACTIVE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  INACTIVE
                </a>
              </li>
            </ul>
          </div>
          <hr className="m-0" />
          <div className="card-body">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </Demo>
      <Demo isCentered>
        <div className="card" style={{ maxWidth: '400px' }}>
          <img className="card-img-top" src="static/window.jpg" alt="Window" />
          <div className="card-body">
            <p className="m-0">Lorem ipsum dolor sit amet.</p>
          </div>
          <hr className="my-0" />
          <div className="p-2 d-flex">
            <div className="ml-auto">
              <button className="btn btn-primary ml-2">Action</button>
            </div>
          </div>
        </div>
      </Demo>
    </div>
  );
}

export default withDocsLayout('Cards')(Cards);
