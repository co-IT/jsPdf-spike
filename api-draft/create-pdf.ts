import {TableTemplate} from './table-template';
import {TableContent} from './table-content';

export function createPdf(data: TableContent) {
  var table = new TableTemplate()
  var doc = new jsPDF();

  doc.fromHTML(table.render(data).get(0), 15, 15, {
  	'width': 170
  });
}
