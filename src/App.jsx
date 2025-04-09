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

      setInputArticle("")
    }

  }


  function deleteFunction(idArticle) {
    const filteredList = list.filter(el => el.id !== idArticle)
    return setList(filteredList)
  }

  function modifyFunction(idArticle) {
    const newText = prompt("inserisci nuovo testo")
    const modList = list.map(el => el.id === idArticle ? {...el, title : newText} : el)
    return setList(modList)
  }

  return (
    <>
      <h1>Lista articoli</h1>
      <ul>
        {list.map(article =>
          <li key={article.id}>
            {article.title}
            {/* delete button */}
            <button onClick={() => deleteFunction(article.id)}>Elimina</button>
            <button onClick={() => modifyFunction(article.id)}>Modifica</button>
          </li>
        )}
      </ul>
      <hr />
      <form action="" onSubmit={submitFunction}>
        <input type="text" value={inputArticle} onChange={event => { setInputArticle(event.target.value) }} />
        {/* add button  */}
        <button>Aggiungi</button>
      </form>
    </>
  )
}

export default App
