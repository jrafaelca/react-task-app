import {Link} from "react-router-dom";
import Layout from "./components/layouts/Default";
import Card from "./components/base/Card";
import Button from "./components/base/Button";

function Delete() {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="w-1/2">
                    <Card title="Card title" description="Card description">
                        <div className="flex justify-end space-x-2">
                            <Link to="/">
                                <Button>Back</Button>
                            </Link>
                            <Button type="danger">Destroy</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default Delete;
