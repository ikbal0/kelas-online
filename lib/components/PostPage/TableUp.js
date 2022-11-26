
export default function TableUp(props) {
    const data = props.data;
    const ad = () => props.helloChild()

    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Test</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        data.map((f, i) => {
                            return(
                                <tr key={i}>
                                    <td>{f.n_speakers}</td>
                                    {/* <td>{props.nav()}</td> */}
                                    <td>{props.passDisplay({id: f._id, n_speakers: f.n_speakers, filename: f.filename})}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}