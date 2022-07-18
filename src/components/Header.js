import {Link} from "react-router-dom";
import Button from "./base/Button";

function Header() {
    return (
        <header className="py-6 text-gray-100 bg-gray-900">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <span className="font-bold">Task</span>App
                    </Link>

                    <Link to="/create">
                        <Button type="primary">
                            Create task
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
