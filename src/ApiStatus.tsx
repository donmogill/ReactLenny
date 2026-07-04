type Args = {
    status: "success" | "error" | "pending";
  };

const ApiStatus = ({ status }: Args) => {  
    switch (status) {
        case "pending":
            return <div>Loading...</div>;
        case "error":
            return <div>Error fetching data</div>;
        case "success":
            return null;
        default:
            throw new Error(`Unknown status: ${status}`);
    }
}

export default ApiStatus;