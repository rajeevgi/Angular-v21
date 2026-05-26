import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Bold, ClassicEditor, Essentials, Font, FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Italic, Paragraph } from 'ckeditor5';


@Component({
  selector: 'app-ck-editor-text',
  imports: [FormsModule, CKEditorModule],
  templateUrl: './ck-editor-text.html',
  styleUrl: './ck-editor-text.css',
})
export class CkEditorText {

  public Editor: any = ClassicEditor;

  editorContent = '';

  config = {

    plugins: [
      Essentials,
      Paragraph,
      Bold,
      Italic,
      Heading,
      Font,
      FontFamily,
      FontSize,
      FontColor,
      FontBackgroundColor
    ],

    toolbar: [
      'undo',
      'redo',
      '|',
      'heading',
      '|',
      'fontFamily',
      'fontSize',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic'
    ]
  };

}
