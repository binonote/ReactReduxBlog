import React from 'react'
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
  <Route path = "/" component={App} >
    <IndexRoute component={PostIndex} />
    <Route path = "posts/new" component={PostsNew} />
    <Route path = "posts/:id" component={PostsShow} />
  </Route>
);


/*
How to Set up React Router
import React from 'react'
import {Route, IndexRoute} from 'react-rounter'
import all components of your application that you want React Router to route

export Route component, pass in 2 props: path and component
 * pathValue is: the value of the url (everything after the root url)
 * component value: is the component of your application
Using IndexRoute component to route the intial page of your application
*/
