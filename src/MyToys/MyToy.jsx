import { useLoaderData } from "react-router-dom";

const MyToy = () => {

    const toys = useLoaderData();

    return (
        <div>
            <h2>this is my toys pase.{toys.length}</h2>
        </div>
    );
};

export default MyToy;