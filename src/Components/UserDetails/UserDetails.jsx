import { useLoaderData } from "react-router-dom";



const UserDetails = () => {
    const user = useLoaderData ();
    const {name,website} = user;





    return (
        <div>
            <h2>Details Abou Users: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;