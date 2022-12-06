// imports 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {
    return (
        <section className=' mx-0 d-flex justify-content-center sticky-bottom fixed-bottom bg-light bg-opacity-25'>
       
        <h5>Stay Connected with me !</h5>
        {/* github quick link */}
        <a href="https://github.com/MichaelZimm20" className='github mx-3' target={'_blank'} rel="noreferrer" alt='Github Link' data-toggle="tooltip" data-placement="top" title="Github Link">
          <FontAwesomeIcon icon={brands('github')} style={{ width: '32px', height: '32px'}} className='github-color'/>
        </a>
  
         {/* linkedin quick link */}
         <a href="https://www.linkedin.com/in/michael-zimmerman-jr-8b859169/" className='mx-2 ' target={'_blank'} rel="noreferrer" alt='LinkedIn' data-toggle="tooltip" data-placement="top" title="LinkedIn">
          <FontAwesomeIcon icon={brands('linkedin')} style={{ width: '32px', height: '32px'}} />
        </a>
       </section>
    )
}

// export function 
export default Footer