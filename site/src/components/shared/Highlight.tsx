import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { SyntaxHighlighterProps } from 'react-syntax-highlighter/light';
import { github } from 'react-syntax-highlighter/styles/hljs';
import './Highlight.css';

export function Highlight(props: SyntaxHighlighterProps) {
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
