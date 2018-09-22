import * as React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  data?: string;
}

export class IconButton extends React.Component<Props> {
  static readonly size = 36;
  render() {
    const { icon, data, className, ...btnProps } = this.props;
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
}
