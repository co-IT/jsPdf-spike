import {createPdf} from './create-pdf';
import {TableContent} from './table-content';

var data = new TableContent('Metal', '40', '34$');

$(document).ready(() => createPdf(data));
  
