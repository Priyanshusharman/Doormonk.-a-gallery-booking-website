import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Sectionmax from './component/Sectionmax';
import des from './image/Designer.png'
import Footer from './component/footer';
function App() {
  return (
    <>
    <Navbar/>
    <Sectionmax desig={des} />
    <Footer/>
    </>
  );
}

export default App;
