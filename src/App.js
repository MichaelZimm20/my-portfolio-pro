// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
// import 'mdbreact/dist/css/mdb.css';
import About from './components/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import './index.css';

function App() {
  return (
    <div>
      <main>
        <About></About>
      </main>

      <footer className=' my-4 d-flex justify-content-center fixed-bottom'>
      {/* github quick link */}
      <a href="https://github.com/MichaelZimm20" className='github'>
        <FontAwesomeIcon icon={brands('github')} style={{ width: '40px', height: '40px'}} className='github-color'/>
      </a>

       {/* linkedin quick link */}
       <a href="https://www.linkedin.com/in/michael-zimmerman-jr-8b859169/" className='mx-2 '>
        <FontAwesomeIcon icon={brands('linkedin')} style={{ width: '40px', height: '40px'}} />
      </a>
     </footer>
    </div>

    
  );
}

export default App;
