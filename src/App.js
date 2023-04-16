import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio2 from './components/Portfolio2/Portfolio2';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';


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
      <Home />
      <About />
      <Portfolio2 />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
