import { Col, Input, Radio, Row, Select, Tag, Typography } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import filterReducer, { PriorityFilterChange, SearchFilterChange, StatusFilterChange } from '../../redux/reduce_slice/FilterSlice';
// import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
    const defaultStatus = 'All';
    const [searchText, setSearchText] = useState('');
    const [status, setStatus] = useState(defaultStatus);
    const [priority, setPriority] = useState([]);
    const dispatch = useDispatch();
    
    const handleSelectPriority = (value) => {
        setPriority(value);
        // dispatch(
        //     priorityFilterChange(value)
        // );
        dispatch(
            filterReducer.actions[PriorityFilterChange](value)
        );
    }

    const handleTextChange = (e) => {
        setSearchText(e.target.value);
        dispatch(
            // searchFilterChange(e.target.value.trimRight())
            filterReducer.actions[SearchFilterChange](e.target.value.trimRight())
        );
    };

    const handleSelectStatus = (e) => {
        setStatus(e.target.value);
        dispatch(
            // statusFilterChange(e.target.value)
            filterReducer.actions[StatusFilterChange](e.target.value)
        );
    }
    
    // console.log(searchText, status);
    
    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search value={searchText} onChange={handleTextChange} placeholder='input search text' />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={status} onChange={e => handleSelectStatus(e)}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    value={priority}
                    onChange={handleSelectPriority}
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                >
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
            </Col>
        </Row>
    );
}
