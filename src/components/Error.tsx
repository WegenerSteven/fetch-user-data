export interface ErrorProps{
    error: {
        message: string;
    }
}

const Error = ({ error }: ErrorProps) => {
    return (
        <div className=" min-h-screen flex items-center justify-center bg-gray-100">
            <h2 className="text-red-500">Error</h2>
            <p>{error.message}</p>
        </div>
    );
}

export default Error;
