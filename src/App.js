
import './App.css';

import NavBar from './Components/Navigation-Bar';
import Splash from './Components/Splash';
import Guide from './Components/Guide';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Splash />
      <Guide />
      <Footer />
    </div>
  );
}

export default App;
