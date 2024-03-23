import { Link } from 'react-router-dom';

function Admin() {
    return (
        <section className='container mt-3'>
            <div>
            <h2>Welcome to Admin panel</h2>
            <hr />
            <Link to={"/add-room"}>Manage Rooms</Link>
        </div>
        </section>
    );
}

export default Admin;
