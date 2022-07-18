import {Link} from "react-router-dom";
import {useData} from "./context";
import Layout from "./components/layouts/Default";
import Card from "./components/base/Card";
import Button from "./components/base/Button";

function App() {
    const {tasks, updateTask} = useData();

    return (
        <Layout>
            <div className="flex flex-col items-center space-y-4">
                {tasks.length === 0 &&
                    <div className="w-1/2">
                        <div className="text-2xl text-center text-gray-400 font">
                            No tasks found
                        </div>
                    </div>
                }

                {tasks.map((task, index) => (
                    <div className="w-1/2" key={index}>
                        <Card title={task.name} description={task.description} type={task.done}>
                            <div className="flex justify-between ">
                                <div className="space-x-3">
                                    <Button type={task.done && 'success'}
                                            onClick={() => updateTask({...task, done: !task.done})}>
                                        {task.done ? 'Done' : 'Undone'}
                                    </Button>
                                </div>

                                <div className="space-x-3">
                                    <Link to={`/edit/${task.id}`}>
                                        <Button>Edit</Button>
                                    </Link>
                                    <Link to={`/delete/${task.id}`}>
                                        <Button>Delete</Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default App;
