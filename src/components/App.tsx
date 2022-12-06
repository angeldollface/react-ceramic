/*
REACT CERAMIC by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Loading components.
import DataCog from './DataCog';
import InfoCog from './InfoCog';
import FooterCog from './FooterCog';
import HeadingCog from './HeadingCog';

// Registering them
// and using them.
function App() {
  return (
   <>
    <HeadingCog/>
    <DataCog/>
    <br/>
    <InfoCog/>
    <br/>
    <FooterCog/>
    <br/>
   </>
  );
}

// And exporting the whole
// "main" component.
export default App;