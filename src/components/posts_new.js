import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes =  {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        //blog post has been created, navigate the user to the index
        //We navigate by calling this.context.router.push with the
        //this.context.router.push('/');
        this.context.router.push('/');
      });
  }

  render() {
    const handleSubmit = this.props.handleSubmit;   //handleSubmit is from redux-form
    const title = this.props.fields.title
    const categories = this.props.fields.categories;
    const content = this.props.fields.content;
    //the const above could be written in es6 like this:
    // const {fields: {title, categories, content}, handleSubmit} = this.props;

    return (
      <div>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}></textarea>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
      </div>
    );

  }
}

function validate(values) {
  const errors = {};
  if(!values.title) {
    errors.title = 'Enter a username';
  }
  if(!values.categories)  {
    errors.categories = 'Enter a category';
  }
  if(!values.content) {
    errors.content = "Enter a content";
  }
  return errors;
}

//connect: 1st argument is mapStateToProps, 2nd is mapDistpatchToProps
//reduxForm: first is form config, 2nd is mapStateToProps, 3rd: mapDistpatchToProps
export default reduxForm({
    form: 'PostsnewForm',
    fields: ['title', 'categories', 'content'], validate
  }, null, {createPost})(PostsNew);

/*
  the 'form' above match with the combineReducers

*/
