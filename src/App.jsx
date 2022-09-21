import './App.css';
// import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Employees from './components/Employees/Employees';

function App() {
  return (
    <>
      <Header/>
      <Employees/>
      {/* <Content/> */}
      <Footer/>
    </>
  );
}

export default App;
