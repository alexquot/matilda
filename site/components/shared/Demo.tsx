import * as toDiffableHtml from 'diffable-html';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Col, Collapse, Row } from 'reactstrap';
import './Demo.scss';
import { Highlight } from './Highlight';
import { IconButton } from './IconButton';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isCentered?: boolean;
  children: JSX.Element | JSX.Element[];
}

interface State {
  showSource: boolean;
}

export class Demo extends React.Component<Props, State> {
  state: State = {
    showSource: false
  };

  toggle = () => {
    this.setState({
      showSource: !this.state.showSource
    });
  };

  render() {
    const { isCentered, children, className, ...rest } = this.props;
    const { showSource } = this.state;

    const childrenArray = React.Children.toArray(children) as JSX.Element[];
    let html = '';
    childrenArray.forEach(
      child => (html += ReactDOMServer.renderToStaticMarkup(child))
    );
    html = toDiffableHtml(html);

    return (
      <div className={`Demo ${className || ''}`} {...rest}>
        <Row
          noGutters
          style={{ padding: '0 70px' }}
          className="bg-light py-4 position-relative"
        >
          <Col
            style={{ maxWidth: '100%' }}
            xs={isCentered ? 'auto' : 12}
            className={isCentered ? 'm-auto' : ''}
          >
            {children}
          </Col>
          <IconButton
            icon="code"
            onClick={this.toggle}
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem'
            }}
          />
        </Row>
        <Collapse isOpen={showSource} className="w-100">
          <div>
            <Highlight className="mb-0" language="xml">
              {html}
            </Highlight>
          </div>
        </Collapse>
      </div>
    );
  }
}
