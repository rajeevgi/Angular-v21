import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {

  ClassicEditor,

  Essentials,
  Paragraph,
  Heading,

  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  Code,
  CodeBlock,

  Font,
  FontFamily,
  FontSize,
  FontColor,
  FontBackgroundColor,

  Alignment,

  List,
  TodoList,

  Indent,
  IndentBlock,

  BlockQuote,

  Link,

  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,

  Image,
  ImageToolbar,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageUpload,
  Base64UploadAdapter,

  MediaEmbed,

  HorizontalLine,

  SpecialCharacters,

  FindAndReplace,

  Highlight,

  RemoveFormat,

  Undo

} from 'ckeditor5';

@Component({
  selector: 'app-ck-editor-text',
  standalone: true,
  imports: [FormsModule, CKEditorModule],
  templateUrl: './ck-editor-text.html',
  styleUrls: ['./ck-editor-text.css']
})
export class CkEditorText {

  public Editor = ClassicEditor;

  public editorContent = `
    <h2>Advanced CKEditor 🚀</h2>

    <p>This is a TinyMCE-like setup.</p>
  `;

  public config = {

    licenseKey: 'GPL',

    plugins: [

      Essentials,
      Paragraph,
      Heading,

      Bold,
      Italic,
      Underline,
      Strikethrough,
      Subscript,
      Superscript,
      Code,
      CodeBlock,

      Font,
      FontFamily,
      FontSize,
      FontColor,
      FontBackgroundColor,

      Alignment,

      List,
      TodoList,

      Indent,
      IndentBlock,

      BlockQuote,

      Link,

      Table,
      TableToolbar,
      TableProperties,
      TableCellProperties,

      Image,
      ImageToolbar,
      ImageCaption,
      ImageResize,
      ImageStyle,
      ImageUpload,
      Base64UploadAdapter,

      MediaEmbed,

      HorizontalLine,

      SpecialCharacters,

      FindAndReplace,

      Highlight,

      RemoveFormat,

      Undo
    ],

    toolbar: [

      'undo',
      'redo',

      '|',

      'heading',

      '|',

      'fontFamily',
      'fontSize',

      '|',

      'fontColor',
      'fontBackgroundColor',

      '|',

      'bold',
      'italic',
      'underline',
      'strikethrough',

      '|',

      'subscript',
      'superscript',

      '|',

      'alignment',

      '|',

      'bulletedList',
      'numberedList',
      'todoList',

      '|',

      'outdent',
      'indent',

      '|',

      'insertTable',

      '|',

      'link',

      '|',

      'uploadImage',

      '|',

      'mediaEmbed',

      '|',

      'blockQuote',
      'codeBlock',

      '|',

      'horizontalLine',

      '|',

      'specialCharacters',

      '|',

      'highlight',

      '|',

      'removeFormat'
    ],

    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableProperties',
        'tableCellProperties'
      ]
    },

    image: {
      toolbar: [
        'imageTextAlternative',
        'toggleImageCaption',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side'
      ]
    },

    fontFamily: {
      options: [
        'default',
        'Arial',
        'Courier New',
        'Georgia',
        'Tahoma',
        'Times New Roman',
        'Verdana'
      ]
    },

    fontSize: {
      options: [
        10,
        12,
        14,
        'default',
        18,
        20,
        24,
        30
      ]
    }
  };
}