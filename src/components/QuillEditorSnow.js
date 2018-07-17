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


class QuillEditorSnow extends React.Component {

  componentDidMount() {
    console.warn('1. QuillEditorSnow - componentDidMount...')

    // create quill element
    var options = {
      modules: {
    toolbar: [
      // [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      // ['image', 'code-block']
    ]
  },
      placeholder: 'Compose an epic...',
      theme: 'snow'  // or 'bubble'
    }

    Quill.register({
      'modules/toolbar': Toolbar,
      'themes/snow': Snow,
      'formats/bold': Bold,
      'formats/italic': Italic,
      'formats/header': Header,
      'ui/icons': Icons //can't seem to get this to work...
    });

    new Quill('#editor-container', options);
  } //componentDidMount

  render() {
    console.warn('0. QuillEditorSnow - render...')
    return (
      <div>

        <div id="toolbar-container">
          {/* <span className="ql-formats">
            <select className="ql-font"></select>
            <select className="ql-size"></select>
          </span> */}
          <span className="ql-formats">
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
            {/* <button className="ql-strike"></button> */}
          </span>
          {/* <span className="ql-formats">
            <select className="ql-color"></select>
            <select className="ql-background"></select>
          </span> */}
          {/* <span className="ql-formats">
            <button className="ql-script" value="sub"></button>
            <button className="ql-script" value="super"></button>
          </span> */}
          {/* <span className="ql-formats">
            <button className="ql-header" value="1"></button>
            <button className="ql-header" value="2"></button>
            <button className="ql-blockquote"></button>
            <button className="ql-code-block"></button>
          </span> */}
          {/* <span className="ql-formats">
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
            <button className="ql-indent" value="-1"></button>
            <button className="ql-indent" value="+1"></button>
          </span> */}
          {/* <span className="ql-formats">
            <button className="ql-direction" value="rtl"></button>
            <select className="ql-align"></select>
          </span> */}
          {/* <span className="ql-formats">
            <button className="ql-link"></button>
            <button className="ql-image"></button>
            <button className="ql-video"></button>
            <button className="ql-formula"></button>
          </span> */}
          {/* <span className="ql-formats">
            <button className="ql-clean"></button>
          </span> */}
        </div>
        <div id="editor-container">
        </div>

      </div>
    )
  }
}

export default QuillEditorSnow;
