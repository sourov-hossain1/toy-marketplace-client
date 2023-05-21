

const ShowToy = ({ toys }) => {

    const { name, price, catagory, sellerName, quantity } = toys;

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head*/}
                <thead>
                    <tr>
                        <th>SellerName</th>
                        <th>Name</th>
                        <th>catagory</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 2 */}
                    <tr className="active">
                        <td>{sellerName}</td>
                        <td>{name}</td>
                        <td>{catagory}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                        <td><button className="btn btn-primary">Details</button></td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ShowToy;