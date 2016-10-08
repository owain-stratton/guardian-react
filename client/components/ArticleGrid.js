import React, { Component } from 'react';

import Article from './Article';

class ArticleGrid extends Component {

   componentWillMount() {
      const { dispatch, getArticles } = this.props;
      getArticles();
   }

   render() {
      if (this.props.articles.data) {
         return (
            <div className="article-grid">
               {this.props.articles.data.results.map( (article, index) => <Article key={index} index={index} article={article} {...this.props} /> )}
            </div>
         );
      } else {
         return (
            <div className="loader-container">
               <div className="loader">
                  Loading...
               </div>
            </div>
         );
      }
   }
}

export default ArticleGrid;
