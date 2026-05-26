import { Routes } from '@angular/router';
import { TextEditor } from './textbox/text-editor/text-editor';
import { CkEditorText } from './textbox/ck-editor-text/ck-editor-text';

export const routes: Routes = [
    // Default route
    { 
        path: '', 
        redirectTo: 'text-editor', 
        pathMatch: 'full' 
    },

    {
        path: 'text-editor',
        component: TextEditor
    },

    {
        path: 'ck',
        component: CkEditorText
    }
];
