import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

// Context
import {useData} from "./context";

// Components
import Layout from "./components/layouts/Default";
import Card from "./components/base/Card";
import Button from "./components/base/Button";

function Delete() {
    const navigate = useNavigate();
    const params = useParams();
    const {findTask, removeTask} = useData();

    const [task, setTask] = useState({
        id: null,
        name: "",
    })

    useEffect(() => {
        const task = findTask(params.id);
        setTask(task);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        removeTask(task.id);
        navigate("/");
    }

    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="w-1/2">
                    <Card title={`Delete ${task.name}`} description="The task will be permanently deleted.">
                        <div className="flex justify-end space-x-2">
                            <Link to="/">
                                <Button>Back</Button>
                            </Link>
                            <Button type="danger" onClick={handleSubmit}>
                                Delete
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default Delete;
