import { useLoaderData } from "react-router-dom";
import ToyCard from "../ToyCard/ToyCard";
import useTitle from "../hooks/useTitle";

const MyToy = () => {

    const toys = useLoaderData();

    useTitle('My Toy')

    return (
        <div className="m-18">
            <h2 className="text-center font-bold text-2xl my-4">Your Total Toys: {toys.length}</h2>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    toys?.map(toy => <ToyCard
                        key={toy._id}
                        toy={toy}
                    ></ToyCard>)
                }
            </div>
        </div>
    );
};

export default MyToy;