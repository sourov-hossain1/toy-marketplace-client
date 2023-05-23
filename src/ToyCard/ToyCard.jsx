import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const ToyCard = ({ toy }) => {

    const { _id, photo, name, catagory, price, rating, quantity, deccription } = toy;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://server-assignment-elaven-sourov-hossain1.vercel.app/toys/${_id}`, {
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toys has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[90px]" src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Category: {catagory} <br /> Price: {price} <br /> Description: {deccription}</p>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <Link><button className="btn btn-active">Updata</button></Link>
                        <button onClick={() =>{handleDelete(_id)}} className="btn bg-orange-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;