// imports 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {
    return (
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
    )
}

// export function 
export default Footer