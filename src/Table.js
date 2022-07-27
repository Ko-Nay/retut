
const Table = ({data}) => {
    return ( 
        <table>
            <tbody>
                <tr> 
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.id}>
                        <th>{item.id}</th>
                        <th>{item.first_name}</th>
                        <th>{item.last_name}</th>

                    </tr>
                ))}

            </tbody>
        </table>
     );
}
 
export default Table;