// imports 
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
// import Home from '../Home';
import About from '../About';
import Nav from '../Nav';
import Work from '../Work';
// import Contact from '../Contact';
import '../../index.css';


export default function PortfolioGenerate()  {

    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        // if (currentPage === 'Home') {
        //   return <Home />;
        // }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Work') {
          return <Work />;
        }
        // return <Contact />;
      };

      const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
             <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
             {renderPage()}
           
        </div>
   

    
    )
}
