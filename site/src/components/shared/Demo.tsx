import * as pretty from 'pretty';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/styles/hljs';
import { Col, Collapse, Row } from 'reactstrap';
import './Demo.css';
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
    html = pretty(html);

    return (
      <div className={`Demo ${className || ''}`} {...rest}>
        <Row noGutters className="bg-light py-4 position-relative">
          <Col
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
          <SyntaxHighlighter showLineNumbers style={github} language="xml">
            {html}
          </SyntaxHighlighter>
        </Collapse>
      </div>
    );
  }
}
