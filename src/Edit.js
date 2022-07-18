import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

// Context
import {useData} from "./context";

// Components
import Layout from "./components/layouts/Default";
import Card from "./components/base/Card";
import Button from "./components/base/Button";
import Input from "./components/base/Input";
import Textarea from "./components/base/Textarea";

function Edit() {
    const navigate = useNavigate();
    const params = useParams();
    const {findTask, updateTask} = useData();

    const [task, setTask] = useState({
        name: "",
        description: "",
    })

    useEffect(() => {
        const task = findTask(params.id);
        setTask(task);
    }, [])

    const handleChange = ({target}) => {
        setTask({...task, [target.name]: target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(task);
        navigate("/");
    }

    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="w-1/2">
                    <Card title={`Edit ${task.name}`}>
                        <form>
                            <Input
                                name="name"
                                label="Name"
                                type="text"
                                placeholder="Entre a name"
                                value={task.name}
                                onChange={handleChange}
                            />
                            <Textarea
                                name="description"
                                label="Description"
                                placeholder="Entre a description"
                                value={task.description}
                                onChange={handleChange}
                            />
                        </form>

                        <div className="flex justify-end space-x-2">
                            <Link to="/">
                                <Button>Back</Button>
                            </Link>
                            <Button type="primary" onClick={handleSubmit}>
                                Update
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default Edit;
