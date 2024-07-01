import { Divider, Typography } from 'antd';
import "./App.css"
import TodoList from './components/TodoList/index';
import Filters from './components/Filters/index';

const { Title } = Typography;

const App = () => {
  return (
    <>

      <div
        style={{
          width: 500,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: 20,
          boxShadow: '0 0 10px 4px #bfbfbf',
          borderRadius: 5,
          height: '90vh',
        }}
      >
        <Title style={{ textAlign: 'center' }}>TODO APP With Redux</Title>
        <Filters />
        <Divider />
        <TodoList />
      </div>
    </>
  )
}

export default App
