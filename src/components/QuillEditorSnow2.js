import React from 'react';


import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
// import 'quill/static/media/bold.svg';
// import 'quill/assets/icons/bold.svg';

// import BoldIcon from 'quill/assets/icons/bold.svg'; //makes bold button `bold.54d33dc3.svg`

import Quill from 'quill/core'; //must be from core for functions to work!!!
import Toolbar from 'quill/modules/toolbar';
import Snow from 'quill/themes/snow'; //snow isn't working for some reason...

import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import Header from 'quill/formats/header';

import Icons from 'quill/ui/icons'; //can't seem to get the icons for the buttons...

// require('https://cdn.quilljs.com/1.3.6/quill.snow.css')
// require('https://cdn.quilljs.com/1.3.6/quill.js')

class QuillEditorSnow2 extends React.Component {

  componentDidMount() {
    console.warn('1. QuillEditorSnow2 - componentDidMount...')


    Quill.register({
      'modules/toolbar': Toolbar,
      'themes/snow': Snow,
      'formats/bold': Bold,
      'formats/italic': Italic,
      'formats/header': Header,
      'ui/icons': Icons //can't seem to get this to work...
    });

    var icons = Quill.import('ui/icons');
  icons['bold'] = '<i class="fa fa-bold" aria-hidden="true"></i>';
  icons['italic'] = '<i class="fa fa-italic" aria-hidden="true"></i>';
  icons['underline'] = '<i class="fa fa-underline" aria-hidden="true"></i>';
  icons['image'] = '<i class="fa fa-picture-o" aria-hidden="true"></i>';
  icons['code'] = '<i class="fa fa-code" aria-hidden="true"></i>';

    var quill = new Quill('#editor', {
      theme: 'snow' //this needs to come after the above, which registers Snow...
    });
  } //componentDidMount

  render() {
    console.warn('0. QuillEditorSnow2 - render...')
    return (
      <div>
        {/* <!-- Create the editor container --> */}
        <div id="editor">
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p></p>
        </div>
      </div>
    )
  }
}

export default QuillEditorSnow2;
