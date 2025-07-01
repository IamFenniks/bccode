import './App.css';
import Header from './comp/a_header/Header';
import Aside from './comp/b_aside/Aside';
import Main from './comp/c_main/Main';
import Footer from './comp/d_footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
