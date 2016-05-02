import {TableContent} from './table-content';

export class TableTemplate {
  render(content: TableContent) : any {
    var template =  `
      <table>
        <tr>
          <td>${content.title}</td>
          <td>${content.amount}</td>
          <td>${content.price}</td>
        </tr>
      </table>
      `;

    return $(template);
  }
}
