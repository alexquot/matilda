import React from 'react';
import '../../scss/matilda.scss';

export default () => {
  return (
    <div className="form-float-container">
      <div className="input-group">
        <input className="form-control" placeholder=" " />
        <div className="form-float">With float label</div>
        <div className="form-underline" />
      </div>
    </div>
  )
}
