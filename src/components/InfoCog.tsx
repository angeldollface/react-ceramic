/*
REACT CERAMIC by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Importing React to define our
// component.
import React from 'react';

// Importing types for Typescript.
import { ReactElement } from 'react';

// A small info component.
export class InfoCog extends React.Component {
  render(): ReactElement {
    return (
      <div className="content">
       <h2 className="info">How do I find my IMEI?</h2>
        <h3 className="info">iOS</h3>
         <p className="info">
          Head over to "Settings", go to "General", and tap "About". 
          Near the bottom there should be an item marked "IMEI".
         </p>
        <h3 className="info">Android</h3>
         <p className="info">
          Open the dialer app. Type "*#06#". Your IMEI will be displayed.
         </p>
      </div>
    );
  }
}

// Exporting our info component.
export default InfoCog;