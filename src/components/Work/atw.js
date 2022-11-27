// imports 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function atw() {

        return (
            <section class="my-2 d-flex flex-column border">
                <div class="p-2 border-bottom">
                     {/* github quick link */}
                        <a href="https://github.com/Just-AJ/roadrunners-shoptalk" className='github' target={'_blank'} rel="noreferrer" alt='Github Link' data-toggle="tooltip" data-placement="top" title="Github Code Link">
                        <FontAwesomeIcon icon={brands('github')} style={{ width: '32px', height: '32px'}} className='github-color'/>
                        </a>
                </div>
                <div class="p-2">
                     {/* live Deployment link */}
                     <a href="https://around-the-world-pro-max.herokuapp.com/" className='github' target={'_blank'} rel="noreferrer" alt='Live Deployment Link' data-toggle="tooltip" data-placement="top" title="Live Deployment Link">
                        <FontAwesomeIcon icon={icon({name: 'rocket', style: 'solid'})} style={{ width: '32px', height: '32px'}} className='github-color'/>
                        </a>
                </div>
               </section>
        );
    }
    
    