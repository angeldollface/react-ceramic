/*
REACT CERAMIC by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Importing React to define our
// component.
import React from 'react';

// Importing types for Typescript.
import { ReactElement } from 'react';

// A small heading component.
export class HeadingCog extends React.Component {
  render(): ReactElement {
    return (
      <>
       <h1>REACT CERAMIC</h1>
     </>
    );
  }
}

// Exporting our heading component.
export default HeadingCog;