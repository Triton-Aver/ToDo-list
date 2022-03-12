import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';
import {
    getTasksList,
    deleteTask,
    updateTask,
    createTask,
} from '../tasksGateway';

jest.mock('../tasksGateway', () => {
    return {
        createTask: jest.fn(() => Promise.resolve()),
        updateTask: jest.fn(() => Promise.resolve()),
        deleteTask: jest.fn(() => Promise.resolve()),
        getTasksList: jest.fn(() => Promise.resolve([])),
    };
});

describe('<TodoList />', () => {
    it('should request tasks list', () => {
        shallow(<TodoList />);

        expect(getTasksList).toBeCalled();
    });

    it('should handle task delete', () => {
        const wrappedComponent = shallow(<TodoList />);
        const deleteHandler = wrappedComponent
            .find('TasksList')
            .prop('handleTaskDelete');
        deleteHandler('some-id-87');

        expect(deleteTask).toBeCalledWith('some-id-87');
    });

    it('should handle task update', () => {
        const wrappedComponent = shallow(<TodoList />);
        const tasks = [
            { id: '1', text: 'Task 1', done: true, createDate: 'date-1' },
            { id: '2', text: 'Task 2', done: false, createDate: 'date-2' },
        ];
        wrappedComponent.setState({
            tasks,
        });
        const updateHandler = wrappedComponent
            .find('TasksList')
            .prop('handleTaskStatusChange');
        updateHandler('2');

        expect(updateTask).toBeCalledWith('2', {
            text: 'Task 2',
            done: true,
            createDate: 'date-2',
        });
    });

    it('should handle task create', () => {
        const wrappedComponent = shallow(<TodoList />);
        const createHandler = wrappedComponent
            .find('CreateTaskInput')
            .prop('onCreate');
        createHandler('Go home');

        expect(createTask).toBeCalledWith({
            text: 'Go home',
            done: false,
            createDate: expect.any(String),
        });
    });
});
