import './App.css';
import Pictures from './Components/Pictures'
import Navbar from './Components/Navbar'
import Images from './Components/Images'
import Trending from './Components/Trending'

function App() {

  return (
    <div className='container'>
      <Navbar />
      <Images />
      <Trending />
    
    </div>
  );
}

export default App;
