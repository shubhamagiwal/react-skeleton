import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPosts} from "../actions";

class PostNew extends Component{

  renderField(field){

    const className=`form group ${field.meta.touched && field.meta.error ? 'has-danger':''}`

      return (
        <div className={className}>
           <label>{field.label}</label>
           <input className="form-control" type="text" {...field.input}/>
           <div className="text-help">{field.meta.touched? field.meta.error: ''}</div>
        </div>);
  }

  onSubmit(values){
    this.props.createPosts(values,()=>{
      this.props.history.push('/');
    });
  }

  render(){
      const { handleSubmit }=this.props;

      const style={
         'marginLeft':'5px'
      };

      return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field name="title" component={this.renderField} label="Title" />
              <Field name="categories"  component={this.renderField} label="Categories" />
              <Field name="content"  component={this.renderField} label="Title for Post" />
              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to="/" className="btn btn-danger" style={style}> Cancel </Link>
         </form>
      );
  }
}


function validate(values){
  const errors={};

   if(!values.title){
     errors.title="Enter a Title";
   }

   if(!values.categories){
     errors.categories="Enter a Category";
   }

   if(!values.content){
     errors.content="Enter a content";
   }

   return errors;
}

export default reduxForm(
  {
   form: 'PostsNewForm',
   validate:validate
   })
  (
   connect(null,{createPosts}) (PostNew)
  );
