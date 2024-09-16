import './App.css'
import Accordion from './components/00_Accordion/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css'
import RandomColor from './components/01_generate_random_color/RandomColor'
import StarRating from './components/02_Star_rating/StarRating'
import SliderImage from './components/03_slider_image/SliderImage'
import LoadMoreButton from './components/04_load_more_button/LoadMoreButton'
import QrCode from './components/06_qr_code/QrCode'
import LitghAndDarkMode from './components/07_Theme_switch/LitghAndDarkMode'
import ScrollIndicator from './components/08_Scroll_indicator/ScrollIndicator'
import Tabs from './components/09_Tabs/Tabs'
import CustomModal from './components/10_Custom_modal/CustomModal'
import GithubProfileFinder from './components/11_Github_profile/GithubProfileFinder'
import SearchAutoCompleteFromAPI from './components/12_Search_AutoComplete_From_API/SearchAutoCompleteFromAPI'
import TicTacToe from './components/13_Tic_Tac_Toe/TicTacToe'
import TicTacToeYoutube from './components/13_tic_tac_toe_youtube/TicTacToeYoutube'
import WeatherApp from './components/21_weather_app/WeatherApp'
function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStar={10} /> */}
      {/* <SliderImage url="https://picsum.photos/v2/list?" limit="5" page="1" /> */}
      {/* <LoadMoreButton /> */}
      {/* <QrCode /> */}
      {/* <LitghAndDarkMode /> */}
      {/* <ScrollIndicator /> */}
      {/* <Tabs /> */}
      {/* <CustomModal /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutoCompleteFromAPI /> */}
      {/* <TicTacToe /> */}
      {/* <TicTacToeYoutube /> */}
      <WeatherApp />
    </>
  )
}

export default App
