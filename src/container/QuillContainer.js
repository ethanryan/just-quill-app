import React, { Component } from 'react';

import QuillEditor from '../components/QuillEditor';

class QuillContainer extends Component {
  constructor() {
    super()
    this.state = {
      // connectionExists: false,
      connectionExists: true,
      choice: '',
      showRoom: 'room1', //default
      // showRoom: '', //default
    };
  } //end constructor

  render() {

    console.log('QuillContainer - render - this.state is: ', this.state)
    return (
      <div className='QuillContainer-style'>

        <h2>
          QuillContainer
        </h2>

        <div style={{border: "1px solid orange"}}>
          <div>
            <QuillEditor
              showRoom={'room999'} //this is only prop that TextEdit needs!!!
              connectionExists={this.state.connectionExists}
              handleColorBorder={this.handleColorBorder}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default QuillContainer;
