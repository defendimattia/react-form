import { useState } from "react"
import articles from "./data/articles"

function App() {

  const [inputArticle, setInputArticle] = useState("")
  const [list, setList] = useState(articles);


  const submitFunction = event => {
    event.preventDefault()

    if (inputArticle) {

      const newArticle = { "id": list.length + 1, "title": inputArticle }
      setList([...list, newArticle])
      console.log(list)

      setInputArticle("")
    }

  }

  function deleteFunction(idArticle) {
    const filteredList = list.filter(el => el.id !== idArticle)
    return setList(filteredList)
  }

  return (
    <>
      <h1>Lista articoli</h1>
      <ul>
        {list.map(article => <li key={article.id}>
          {article.title}
          <button onClick={() => deleteFunction(article.id)}>Elimina</button>
        </li>
        )}
      </ul>
      <hr />
      <form action="" onSubmit={submitFunction}>
        <input type="text" value={inputArticle} onChange={event => { setInputArticle(event.target.value) }} />
        <button>Aggiungi</button>
      </form>
    </>
  )
}

export default App
