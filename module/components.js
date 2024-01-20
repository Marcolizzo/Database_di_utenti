export { tableHtml }

const tableHtml = function (user, index) {
  let trTable = `
    <tr>
        <th scope="row">${index + 1}</th>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
      </tr>`;
  return trTable
}