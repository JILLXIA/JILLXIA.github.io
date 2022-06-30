import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from "prism-react-renderer/themes/duotoneLight";
import styled from "styled-components";
import "./src/styles/global.css"
import Layout from "./src/components/layout"
import { PageType } from './src/components/Header';
/* eslint-disable */
const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  border-radius: 1em;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;
const component = {
  pre: props => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
        )}
      </Highlight>
    );
  },
};
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  console.log(`layout ${element.key}`)
  let pageType = PageType.HOME
  if(element.key.startsWith('/blog/')){
    pageType = PageType.BLOG
  }
  return <Layout pageType={pageType}>{element}</Layout>
}