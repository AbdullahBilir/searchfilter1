function Table({ data }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>SurName</th>
          <th>Email</th>
        </tr>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
