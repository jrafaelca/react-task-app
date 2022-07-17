import Button from "./base/Button";

function Header() {
    return (
        <header className="py-6 text-gray-100 bg-gray-900">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="/" className="font-semibold">
                        Task<span className="font-light">App</span>
                    </a>

                    <Button type="primary">
                        Add task
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
