import articles from "./data/articles"

function App() {
  return (
    <>
      <h1>Lista articoli</h1>
      <ul>
        {articles.map(article => <li key={article.id}>{article.title}</li>)}
      </ul>
      <hr />
      <form action="">
        <input type="text" />
        <button>Aggiungi</button>
      </form>
    </>
  )
}

export default App
