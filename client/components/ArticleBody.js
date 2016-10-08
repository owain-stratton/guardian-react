import React, { Component } from 'react';

class ArticleBody extends Component {



   formatDate() {
      const DateNames = {
         monthNames: [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
         ],
         weekNames: [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
         ]
      };

      const { webPublicationDate } = this.props.article;
      let PubDate = new Date(webPublicationDate);

      let weekDay = DateNames.weekNames[PubDate.getDay()];
      let date = PubDate.getDate();
      let month = DateNames.monthNames[PubDate.getDate()];
      let year = PubDate.getFullYear();

      let publicationDate = `${weekDay}, ${date} ${month} ${year}`;
      return publicationDate;
   }

   render() {
      const { byline, body } = this.props.article.fields;
      const { webPublicationDate } = this.props.article;

      return (
         <div className="article-body-container">
            <div className="author">
               Author: {byline}
            </div>
            <div className="publication-date">
               Date: {this.formatDate()}
            </div>
            <div className="body-text"
               dangerouslySetInnerHTML={{__html: body}}>
            </div>
         </div>
      );
   }
}

export default ArticleBody;
