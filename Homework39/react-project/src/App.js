import react from 'react'; 
import './css/App.css';
import Header from './header.js';
import HomePage from './HomePage.js';
import About from './About.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './footer.js'

function App() {
  return (
      <div className="App">
        
        <BrowserRouter>
        <div className='page'>
          <Header />
          <Route path='/' exact component={HomePage} />
          <Route path='/about' exact component={About} />
          </div>
          <Footer />
        </BrowserRouter>
        

      </div>

    
  );
}

export default App;
