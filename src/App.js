// imports 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './index.css';

function App() {
  return (
    <div>

    <Nav></Nav>
      <main>
        <About></About>
      </main>


     <Footer></Footer>
    </div>

    
  );
}

export default App;
