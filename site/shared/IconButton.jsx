import * as React from 'react';

export default function({ icon, data, className, ...btnProps }) {
  return (
    <button
      type="button"
      className={`btn btn-secondary btn-rounded ${className || ''}`}
      {...btnProps}
    >
      {icon && <i className="material-icons">{icon}</i>}
      {data && data}
    </button>
  );
}
