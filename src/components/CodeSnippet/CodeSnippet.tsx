import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/github-dark.css';

import React, {useEffect, useRef} from 'react';

hljs.configure({
  languages: ['javascript', 'typescript', 'html', 'css'],
});

type CodeSnippetProps = React.PropsWithChildren<{
  language: 'javascript' | 'typescript' | 'html' | 'css';
}>;
export const CodeSnippet = ({children, language}: CodeSnippetProps) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      if (codeRef.current.classList.contains('hljs')) {
        return;
      }
      hljs.highlightBlock(codeRef.current);
    }
  }, []);

  return (
    <pre>
      <code className={language} ref={codeRef}>
        {children}
      </code>
    </pre>
  );
};
