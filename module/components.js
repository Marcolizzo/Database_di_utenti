export {tableHtml}

const tableHtml = function (user) {
    let row = 1
    let trTable = `
    <tr>
        <th scope="row">${row++}</th>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
      </tr>`;
      return trTable
}