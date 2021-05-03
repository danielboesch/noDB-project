import './App.css';
import PodcastList from './components/PodcastList'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <PodcastList />
    </div>
  );
}

export default App;
