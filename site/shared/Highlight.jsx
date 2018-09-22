import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/styles/hljs';
import './Highlight.scss';

export default function Highlight(props) {
  return (
    <div className="Highlight">
      <SyntaxHighlighter
        style={github}
        customStyle={{ backgroundColor: '#f5f5f5' }}
        language="xml"
        {...props}
      />
    </div>
  );
}
