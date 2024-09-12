import './App.css'
import Accordion from './components/00_Accordion/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css'
import RandomColor from './components/01_generate_random_color/RandomColor'
import StarRating from './components/02_Star_rating/StarRating'
function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      <StarRating numOfStar={10} />
    </>
  )
}

export default App
