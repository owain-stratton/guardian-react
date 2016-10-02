import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {

   componentDidMount() {
      console.log(this.props);
      const { dispatch, getArticles } = this.props;
      dispatch(getArticles());
   }

   render() {
      return (
         <div>
            <h1>
               <Link to="/">Guardian Sports News</Link>
            </h1>
            { React.cloneElement(this.props.children, this.props) }
         </div>
      );
   }
}

export default Main;
