import {Link} from "react-router-dom";
import Layout from "./components/layouts/Default";
import Card from "./components/base/Card";
import Button from "./components/base/Button";

function App() {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="w-1/2">
                    <Card title="Card title" description="Card description">
                        <div className="flex justify-between space-x-2">
                            <Link to="/edit">
                                <Button type="success">Completed</Button>
                            </Link>

                            <div>
                                <Link to="/edit">
                                    <Button>Edit</Button>
                                </Link>
                                <Link to="/delete">
                                    <Button>Delete</Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default App;
