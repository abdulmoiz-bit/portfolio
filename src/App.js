import MainHome from './pages/MainHome';
import MainAbout from "./pages/MainAbout"
import MainContact from "./pages/MainContact"
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  //const [currentmode, setcurrentmode] = useState("light")
  /*
  function changeLightTheme() {
    setcurrentmode("light")
    document.body.style.backgroundColor = 'rgb(242, 242, 242)';
  };
  function changeDarkTheme() {
    setcurrentmode("dark")
    console.log("change theme")
    document.body.style.backgroundColor = 'rgb(43, 43, 43)';
  };
  function changeFreezeTheme() {
    setcurrentmode("freeze")
    console.log("change theme")
    document.body.style.backgroundImage = "url('assets/images/ice4.jpg')";
  };
*/
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/contact" element={<MainContact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
