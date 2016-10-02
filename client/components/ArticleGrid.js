import React, { Component } from 'react';
import { Link } from 'react-router';

class ArticleGrid extends Component {

   constructor(props) {
      super(props);
   }

   componentWillMount() {
      const { getArticles } = this.props;
      getArticles();
   }

   render() {
      return (
         <div>
            {this.props.articles.data.results.map((article, index) => <p key={index}>{article.fields.headline}</p>)}
         </div>
      );
   }
}

export default ArticleGrid;
