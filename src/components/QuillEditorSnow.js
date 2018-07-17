import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import Quill from 'quill/core'; //must be from core for functions to work!!!
import Toolbar from 'quill/modules/toolbar';
import Snow from 'quill/themes/snow'; //snow works, but need to import and register formats, and replace icons...

import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Header from 'quill/formats/header';
import Underline from 'quill/formats/underline';
import Link from 'quill/formats/link';

import Icons from 'quill/ui/icons'; //need to import icons, then replace them...

class QuillEditorSnow extends React.Component {

  componentDidMount() {
    console.warn('1. QuillEditorSnow - componentDidMount...')

    Quill.register({
      'modules/toolbar': Toolbar,
      'themes/snow': Snow,
      'formats/bold': Bold,
      'formats/italic': Italic,
      'formats/header': Header,
      'format/underline': Underline,
      'format/link': Link,
      'ui/icons': Icons
    });

    var icons = Quill.import('ui/icons');
    icons['bold'] = '<i class="fa fa-bold" aria-hidden="true"></i>';
    icons['italic'] = '<i class="fa fa-italic" aria-hidden="true"></i>';
    icons['underline'] = '<i class="fa fa-underline" aria-hidden="true"></i>';
    icons['link'] = '<i class="fa fa-link" aria-hidden="true"></i>';

    icons['list'] = '<i class="fa fa-list-ol" aria-hidden="true"></i>';
    icons['list'] = '<i class="fa fa-list-ul" aria-hidden="true"></i>';

    icons['clean'] = '<i class="fa fa-question" aria-hidden="true"></i>'; // making this a question mark for now because i can't find the font awesome equivalent of the clear / clean icon...

    // icons['image'] = '<i class="fa fa-picture-o" aria-hidden="true"></i>';
    // icons['code'] = '<i class="fa fa-code" aria-hidden="true"></i>';

    var quill = new Quill('#editor', {
      theme: 'snow' //this needs to come after the above, which registers Snow...
    });

    //replacing unrendered svg string in dropdown with an empty string, then adding sort icon in css...
    var dropdown = document.getElementsByClassName('ql-picker-label'); //changing text here, can't do it in css...
    dropdown[0].innerText = "";

  } //componentDidMount

  render() {
    console.warn('0. QuillEditorSnow - render...')
    return (
      <div class="standalone-container">
      <div id="QuillEditorSnow-container">
        {/* <!-- Create the editor container --> */}
        <div id="editor">
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p></p>
        </div>
      </div>
      </div>
    )
  }
}

export default QuillEditorSnow;
