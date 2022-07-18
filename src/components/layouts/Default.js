import Header from "../Header";

function Default({children}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header/>

            <div className="container mx-auto pt-8">
                {children}
            </div>
        </div>
    );
}

export default Default;
