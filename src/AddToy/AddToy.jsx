
const AddToy = () => {

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const catagory = form.cata.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const deccription = form.deccription.value;

        const newToy = { photo, name, sellerName, sellerEmail, catagory, price, rating, quantity, deccription };
        console.log(newToy);

        // send data to the server
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    return (
        <div className="p-20">
            <h2 className="text-3xl">Add a Toy</h2>
            <form onSubmit={handleAddToy}>
                {/* form row */}
                <div className="flex mb-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="picture URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toys Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="flex mb-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="sellerEmail" placeholder="Seller Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="flex mb-4">
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cata" placeholder="Sub-category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="flex mb-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  w-1/2">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-control  w-full">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="deccription" placeholder="Detail description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Toy" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddToy;