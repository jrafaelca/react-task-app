import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

// Context
import {useData} from "./context";

// Components
import Layout from "./components/layouts/Default";
import Card from "./components/base/Card";
import Button from "./components/base/Button";
import Input from "./components/base/Input";
import Textarea from "./components/base/Textarea";

function Create() {
    const navigate = useNavigate();
    const {addTask} = useData();

    const [task, setTask] = useState({
        name: "",
        description: "",
    })

    const handleChange = ({target}) => {
        setTask({...task, [target.name]: target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        navigate("/");
    }

    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="w-1/2">
                    <Card title="Create a new task">
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
                                Save
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default Create;
