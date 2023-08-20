import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{
        width: '100%',
        height: '70px'
      }}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
