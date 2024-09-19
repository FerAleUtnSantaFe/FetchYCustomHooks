import './App.css'
import { useCatFact } from './hooks/useCatFacts.js'
import { useCatImage } from './hooks/useCatImage.js'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl} = useCatImage({fact})

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Fetch Y Custom Hooks</h1>
      <button onClick={handleClick}>Get New Fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )

}

export default App
