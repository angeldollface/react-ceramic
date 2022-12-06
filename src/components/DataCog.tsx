/*
REACT CERAMIC by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// We import the library I wrote
// to validate IMEI numbers.
import * as luhny from 'luhny';
  
// Importing React to define our
// component.
import React from 'react';
  
// Importing types for Typescript.
import { ReactElement } from 'react';
  
// Defining our class-based component.
export class DataCog extends React.Component<
  {}, 
  {
    inputData: string,
    isValid: string
  }
> {
  
  // Setting up
  // our stateful variables
  // here.
  constructor(props: any) {
    super(props);
    this.state = {
      inputData: 'IMEI HERE!',
      isValid: 'No status!'
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateString = this.validateString.bind(this);
  }
  
  /// Handling input field changes!
  handleChange(event: any): void {
    this.setState(
        {
            inputData: event.target.value
        }
    );
  }

  // Validates the input IMEI number.
  validateString(): void {
    let result: boolean = luhny.validateIMEI(this.state.inputData);
    if (result){
      this.setState(
        {
          isValid: true.toString()
        }
      );
    }
    else if (this.state.inputData == ''){
      this.setState(
        {
          isValid:'Empty input!'
        }
      );
    }
    else if (this.state.inputData.length != 15){
      this.setState(
        {
          isValid: 'IMEI length invalid!'
        }
      );
    }
    else if (!luhny.isNumberSequence(this.state.inputData)){
      this.setState(
        {
          isValid: 'Illegal characters found!'
        }
      );
    }
    else {
      this.setState(
        {
          isValid: false.toString()
        }
      )
    }
  }

  // Returning our stateful
  // validator elements.
  render(): ReactElement {
    return (
     <div className='search'>
      <input
       type='text'
       value={this.state.inputData}
       onChange={this.handleChange}
      />
      <button className='search' onClick={this.validateString}>SEARCH</button>
      <p className='result'>IMEI valid: {this.state.isValid}</p>
     </div>
    );
  }

}

// Exporting our component.
export default DataCog;