import { useState, useEffect } from 'react'
import QuoteCard from './components/QuoteCard.jsx';
import './App.css'

let page = 1;

function App() {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getQuotes() {
    setLoading(true);
    try {
      const response = await fetch(`https://api.freeapi.app/api/v1/public/quotes?page=${page}`);
      const data = await response.json();
      setQuotes(data.data.data);
      setLoading(false);
      page = page + 1;
    } catch (error) {
      setQuotes(error.message);
    }
    
  }
  
  useEffect(() => {
    getQuotes();
  }, [])
  
  return (
    <>
      <div className="app-container">
      <div className="content-wrapper">
        <header className="header">
          <h1>Quote Vault</h1>
          <p>Exploring human nature through the words of the greats.</p>
        </header>

        <div className="quote-grid">
          {loading ? 
          <h3>Loading...</h3>
          : 
          quotes.map(quote => (
            <QuoteCard key={quote.id} quote={quote}/>
          ))}
        </div>

        <div className="actions-container">
          <button 
            className="btn-fetch" 
            onClick={getQuotes}
            disabled={loading}
          >
            {loading ? <div className="spinner" /> : null}
            {loading ? 'Generating...' : 'Get More Quotes'}
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
