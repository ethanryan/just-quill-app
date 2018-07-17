import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../quill/dist/quill.snow.css';

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


const element = <FontAwesomeIcon icon={faCoffee} />

class QuillEditor extends React.Component {

  componentDidMount() {
    console.warn('1. QuillEditor - componentDidMount...')

    window.FontAwesomeConfig = {
      searchPseudoElements: true
    }

    var toolbarOptions = [
      // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      ['bold', 'italic'],                               // toggled buttons
    ]

    //eventually can use this......
    //     var toolbarOptions = [
    //   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    //   ['blockquote', 'code-block'],
    //
    //   [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    //   [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    //   [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    //   [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    //   [{ 'direction': 'rtl' }],                         // text direction
    //
    //   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    //   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    //
    //   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    //   [{ 'font': [] }],
    //   [{ 'align': [] }],
    //
    //   ['clean']                                         // remove formatting button
    // ];

    // create quill element
    var options = {
      debug: 'info',
      modules: {
        //toolbar: { container: '#toolbar' } //use this with 'snow' theme, which makes bold button `bold.54d33dc3.svg` for some reason...
        toolbar: toolbarOptions
      },
      placeholder: 'Compose an epic...',
      readOnly: false,
      // theme: 'snow' //can't get this to work! want to see icons in buttons...
      theme: null
    };
    Quill.register({
      'modules/toolbar': Toolbar,
      'themes/snow': Snow,
      'formats/bold': Bold,
      'formats/italic': Italic,
      'formats/header': Header,
      'ui/icons': Icons //can't seem to get this to work...
    });
    new Quill('#editor', options);
  } //componentDidMount

  render() {
    console.warn('0. QuillEditor - render...')
    return (
      <div>

        <p>
          QuillEditor - this.props.showRoom: {this.props.showRoom}
        </p>

        {/* new example, from codepen: */}
        {/* <div id="editor-container"></div> */}

        {/* Create toolbar container, outside of editor... */}
        {/* <div id="toolbar"></div> */}

        <div id="toolbar">
          {/* <button className="ql-bold">Bold</button> */}
          {/* <button className="ql-bold">{element}</button> */}
          {/* <button className="ql-bold" id="bold-button"><i className="fa fa-bold">Bold</i></button> */}
          {/* can add in my own icons here, for example, from font awesome... */}

          {/* <button className="ql-bold" id="bold-button"><i className="fa fa-bold">Italic</i></button> */}
          {/* <button className="ql-bold" id="bold-button"><i className="fa fa-bold">Header???</i></button> */}
          {/* <button class="ql-italic">Italic</button> */}
        </div>

        {/* Create the editor container... */}
        <div id="editor">
          {/* <p>Some initial <strong>bold</strong> text</p> */}
        </div>

      </div>
    )
  }
}

export default QuillEditor;
