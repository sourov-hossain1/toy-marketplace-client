import { useLoaderData } from "react-router-dom";
import ShowToy from "./ShowToy";

const AllToy = () => {

    const allToys = useLoaderData();

    return (
        <div>
            <h2 className="text-center text-[40px] mt-4 mb-3">All Toys</h2>
            {
                allToys?.map(toys => <ShowToy
                key={toys._id}
                toys = {toys}
                ></ShowToy>)
            }
        </div>
    );
};

export default AllToy;