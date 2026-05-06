function QuoteCard({quote}) { 
    return (
    <div className="quote-card">
        <div>
            <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V3L10.017 3V15C10.017 18.3137 7.33071 21 4.017 21H2.017Z" />
            </svg>
            <p className="quote-text">"{quote.content}"</p>
        </div>

        <div className="meta-info">
            <div className="author-section">
                <div className="avatar">{quote.author.charAt(0)}</div>
                <div>
                    <h3 className="author-name">{quote.author}</h3>
                    <div className="date-text">
                        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" />
                        </svg>
                        {new Date(quote.dateAdded).toLocaleDateString()}
                    </div>
                </div>
            </div>

            <div className="card-footer">
                {quote.tags.length === 0 ?
                <span></span>
                :
                quote.tags.map(tag => (<span key={tag} className="tag-pill">{tag}</span>))}
            </div>
        </div>
    </div>
    )
}

export default QuoteCard
