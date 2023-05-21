
const ToyCard = ({ toy }) => {

    const { photo, name, sellerName, sellerEmail, catagory, price, rating, quantity, deccription } = toy;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[90px]" src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Category: {catagory} <br /> Price: {price} <br /> Description: {deccription}</p>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn btn-active">Updata</button>
                        <button className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;