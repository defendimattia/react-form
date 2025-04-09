import articles from "./data/articles"

function App() {
  return (
    <>
      <h1>Lista articoli</h1>
      <ul>
        {articles.map(article => <li>{article.title}</li>)}
      </ul>
    </>
  )
}

export default App
