import React, { Component } from 'react';

import Article from './Article';
import ArticleBody from './ArticleBody';

class ArticleSingle extends Component {
   render() {
      const { articleId } = this.props.params;
      const currentArticle = this.props.articles.data.results[articleId];

      return (
         <div className="article-container">
            <Article index={articleId} article={currentArticle} {...this.props} />
            <ArticleBody index={articleId} article={currentArticle} {...this.props} />
         </div>
      );
   }
}

export default ArticleSingle;
