import React from 'react'

function SelectedArticle({selected}) {
    return (
        <div>
                <h1>selected Article</h1>
                <h3>{selected.articlename}</h3>
        </div>
    )
}

export default SelectedArticle
