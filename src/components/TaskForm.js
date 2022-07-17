import Input from "./base/Input";
import Textarea from "./base/Textarea";

function TaskForm() {
    return (
        <form>
            <Input label="Name" type="text" placeholder="Entre a name"/>
            <Textarea label="Description" placeholder="Entre a description"/>
        </form>
    );
}

export default TaskForm;
