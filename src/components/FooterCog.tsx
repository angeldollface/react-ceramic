/*
REACT CERAMIC by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Importing React to define our
// component.
import React from 'react';

// Importing types for Typescript.
import { ReactElement } from 'react';

// A small footer component.
export class FooterCog extends React.Component {
  render(): ReactElement {
    return (
      <>
       <p className="footer">
        Made with love and Glam Metal! XOXO |
        <a className="footer" href="https://github.com/angeldollface/ceramic">
         Source
        </a>
       </p>	
     </>
    );
  }
}

// Exporting our footer component.
export default FooterCog;