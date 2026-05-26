import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

// import 'tinymce/tinymce';

// // Theme
// import 'tinymce/themes/silver';

// // Icons
// import 'tinymce/icons/default';

// // Plugins
// import 'tinymce/plugins/advlist';
// import 'tinymce/plugins/autolink';
// import 'tinymce/plugins/lists';
// import 'tinymce/plugins/link';
// import 'tinymce/plugins/image';
// import 'tinymce/plugins/charmap';
// import 'tinymce/plugins/preview';
// import 'tinymce/plugins/anchor';
// import 'tinymce/plugins/searchreplace';
// import 'tinymce/plugins/visualblocks';
// import 'tinymce/plugins/code';
// import 'tinymce/plugins/fullscreen';
// import 'tinymce/plugins/insertdatetime';
// import 'tinymce/plugins/media';
// import 'tinymce/plugins/table';
// import 'tinymce/plugins/wordcount';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [EditorModule, FormsModule],
  templateUrl: './text-editor.html',
  styleUrls: ['./text-editor.css']
})
export class TextEditor {

  editorContent = '';

  tinyInit = {
    height: 500,
    menubar: true,

    plugins: [
      'advlist',
      'autolink',
      'lists',
      'link',
      'image',
      'charmap',
      'preview',
      'anchor',
      'searchreplace',
      'visualblocks',
      'code',
      'fullscreen',
      'insertdatetime',
      'media',
      'table',
      'wordcount'
    ],

    toolbar:
      'undo redo | blocks fontfamily fontsize | ' +
      'bold italic underline strikethrough | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist outdent indent | ' +
      'link image media table | ' +
      'forecolor backcolor | ' +
      'removeformat | code fullscreen preview',

    content_style: `
      body {
        font-family: Arial, sans-serif;
        font-size: 14px;
      }
    `
  };
}