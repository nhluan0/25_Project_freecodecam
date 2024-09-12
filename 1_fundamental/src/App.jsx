import './App.css'
import Accordion from './components/00_Accordion/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css'
import RandomColor from './components/01_generate_random_color/RandomColor'
import StarRating from './components/02_Star_rating/StarRating'
import SliderImage from './components/03_slider_image/SliderImage'
import LoadMoreButton from './components/04_load_more_button/LoadMoreButton'
function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStar={10} /> */}
      {/* <SliderImage url="https://picsum.photos/v2/list?" limit="5" page="1" /> */}
      <LoadMoreButton />
    </>
  )
}

export default App
