import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { todoList_ChangeCompleteStatus } from '../../redux/actions';
import todoListReducer, { TodoList_ChangeCompleteStatus, TodoList_DeleteTodo } from '../../redux/reduce_slice/TodoListSlice';

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

// eslint-disable-next-line react/prop-types
export default function Todo({ id, name, prioriry, completed }) {
    const [checked, setChecked] = useState(completed);
    const dispatch = useDispatch();

    const toggleCheckbox = () => {
        setChecked(!checked);
        // dispatch(todoList_ChangeCompleteStatus(id))
        dispatch(todoListReducer.actions[TodoList_ChangeCompleteStatus](id));
    };

    return (
        <Row
            justify='space-between'
            style={{
                marginBottom: 3,
            }}
        >
            <Checkbox style={{ ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}), }} checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <div>
                <Tag color={priorityColorMapping[prioriry]}
                    style={{ margin: 0, marginRight: "30px", ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}), }
                    }>
                    {prioriry}
                </Tag>
                <span
                    onClick={() => {
                        console.log("delete todo", id);
                        dispatch(todoListReducer.actions[TodoList_DeleteTodo](id))
                    }}
                    style={{ textDecoration: "none", color: "red", cursor: "pointer" }}>
                    X
                </span>
            </div>
        </Row>
    );
}
