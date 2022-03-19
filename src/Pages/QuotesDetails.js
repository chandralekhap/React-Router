import {useParams, Route} from 'react-router-dom'
import { Fragment } from 'react';
import  Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const QuotesDetails = () =>{

    const param= useParams();

    const Dummy_quotes = [

        {id: 'q1', author: 'max', text: 'this is great demo'},
       { id: 'q2', author: 'Mayuri', text: 'Superrb'}
    ]

    const quote = Dummy_quotes.find((quote)=> quote.id === param.quoteId)

    if (!quote)
        return <p>Quote not found!</p>
    return (
        <Fragment>
          <HighlightedQuote text = {quote.text} author = {quote.author}/>
      <Route path = {`/quotes/${param.quoteId}/comments`}>
        <Comments/>
      </Route>
        </Fragment>
    );
}

export default QuotesDetails;