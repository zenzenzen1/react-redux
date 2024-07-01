import { Button, Col, Input, Row, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo/index.jsx';
// import { addTodoAction } from '../../redux/actions.js';
import { useState } from 'react';
import { v4 } from 'uuid';
import todoListReducer, { AddTodoAction } from '../../redux/reduce_slice/TodoListSlice.js';
import { todoRemainingSelector } from '../../redux/selectors.js';

export default function TodoList() {
	const defaultPriority = 'Medium';
	const [todoName, setTodoName] = useState('');
	const [priority, setPriority] = useState(defaultPriority);
	const dispatch = useDispatch();

	const todoList = useSelector(todoRemainingSelector);
	// const searchText = useSelector(searchTextSelector);

	// console.log(searchText);
	// console.log(todoList);
	const handleAddButtonClick = () => {
		// dispatch(
		// 	addTodoAction({
		// 		id: v4(),
		// 		name: todoName,
		// 		completed: false,
		// 		priority: priority,
		// 	})
		// );
		dispatch(
			todoListReducer.actions[AddTodoAction]({
				id: v4(),
				name: todoName,
				completed: false,
				priority: priority,
			})
		);

		setTodoName('');
		setPriority(defaultPriority);
	};

	const handleChangePriority = (value) => {
		setPriority(value);
	}

	// console.log(useSelector(state => state));

	return (
		<Row style={{ height: 'calc(100% - 40px)' }}>
			<Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
				{/* <Todo name='Learn React' prioriry='High' />
				<Todo name='Learn Redux' prioriry='Medium' />
				<Todo name='Learn JavaScript' prioriry='Low' /> */}
				{todoList.map((todo) => (
					<Todo
						id={todo.id}
						key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />
				))}
			</Col>
			<Col span={24}>
				<Input.Group style={{ display: 'flex' }} compact>
					<Input placeholder='Add todo' value={todoName} onChange={(e) => setTodoName(e.target.value)} />
					<Select defaultValue={priority} value={priority}
						onChange={handleChangePriority}>
						<Select.Option value='High' label='High'>
							<Tag color='red'>High</Tag>
						</Select.Option>
						<Select.Option value='Medium' label='Medium'>
							<Tag color='blue'>Medium</Tag>
						</Select.Option>
						<Select.Option value='Low' label='Low'>
							<Tag color='gray'>Low</Tag>
						</Select.Option>
					</Select>
					<Button type='primary' onClick={handleAddButtonClick}>
						Add
					</Button>
				</Input.Group>
			</Col>
		</Row>
	);
}
