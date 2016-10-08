import React, { Component } from 'react';
import { Link } from 'react-router';

class Article extends Component {

   timeToRead() {
      const { bodyText } = this.props.article.fields;

      let articleWords = bodyText.split(' ');
      let wordCount = articleWords.length;

      let wpm = Math.ceil(wordCount / 200); // Average words per minute

      return wpm;
   }

   render() {
      const { article, index } = this.props;

      return (
         <div className="article-container">
            <div className="article-photo-container">
               <Link to={`/article/${index}`}>
                  <img src={article.fields.thumbnail} alt={article.fields.headline} />
                  <div className="infoUI">
                     <h6 className="read-time">
                        {this.timeToRead()} min read
                     </h6>
                  </div>
               </Link>
            </div>
            <div className="article-info">
               <h2>
                  {article.fields.headline}
               </h2>
               <p className="subhead">
                  {article.fields.trailText}
               </p>
            </div>
         </div>
      );
   }
}

export default Article;
