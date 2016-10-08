function articles(state = {}, action) {
   switch(action.type) {
      case 'RECEIVE_ARTICLES' :
         return {
            ...state,
            data: action.data
         }
         break;
      default :
         return state;
   }
}

export default articles;
