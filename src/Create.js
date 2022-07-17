import {Link} from "react-router-dom";
import Layout from "./components/layouts/Default";
import Card from "./components/base/Card";
import Button from "./components/base/Button";
import TaskForm from "./components/TaskForm";

function Create() {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="w-1/2">
                    <Card title="Create a new task">
                        <TaskForm/>

                        <div className="flex justify-end space-x-2">
                            <Link to="/">
                                <Button>Back</Button>
                            </Link>
                            <Button type="primary">Save</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default Create;
