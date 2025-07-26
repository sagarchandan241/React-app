import { useRouteError } from "react-router";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-container">
            <h1>OOPs Something Went Wrong</h1>
            <h3>404: Page is not found</h3>
        </div>
    )
} 
export default Error;