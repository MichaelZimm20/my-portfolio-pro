// imports 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Profile() {
    return (
        <section className=' mx-0 d-flex justify-content-center static-bottom bg-transparent'>
        {/* github quick link */}
        <a href="https://github.com/MichaelZimm20" className='github' target={'_blank'} rel="noreferrer">
          <FontAwesomeIcon icon={brands('github')} style={{ width: '40px', height: '40px'}} className='github-color'/>
        </a>
  
         {/* linkedin quick link */}
         <a href="https://www.linkedin.com/in/michael-zimmerman-jr-8b859169/" className='mx-2 ' target={'_blank'} rel="noreferrer">
          <FontAwesomeIcon icon={brands('linkedin')} style={{ width: '40px', height: '40px'}} />
        </a>
       </section>
    )
}

// export function 
export default Profile