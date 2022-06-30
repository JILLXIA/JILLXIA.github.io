import Layout from "./src/components/layout"
import React from 'react';
import { PageType } from './src/components/Header';

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