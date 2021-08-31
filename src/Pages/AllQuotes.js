import QuoteList from '../components/quotes/QuoteList'
const Dummy_quotes = [

    {id: 'q1', author: 'max', text: 'this is great demo'},
   { id: 'q2', author: 'Mayuri', text: 'Superrb'}
]

const AllQuotes = () =>{

    return <QuoteList quotes = {Dummy_quotes}/>
};

export default AllQuotes;