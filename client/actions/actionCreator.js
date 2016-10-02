import fetch from 'isomorphic-fetch';

const KEY = 'cce27b81-c52a-4bad-9804-dda1cc5b4baf'
// Get articles from Guardian API
function receiveArticles(json) {
   console.log(json);
   // return {
   //    type: RECEIVE_ARTICLES,
   //    articles: json.d
   // }
}

export function getArticles() {
   const URL = `http://content.guardianapis.com/sport?edition=uk&show-fields=all&api-key=${KEY}`;

   return fetch(URL)
      .then((response) => response.json())
      .then((json) => dispatch(receiveArticles(json)));
}

// Get single article from Guardian API
