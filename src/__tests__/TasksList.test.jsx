import React from 'react';
import { shallow } from 'enzyme';
import TasksList from '../TasksList';

describe('<TasksList />', () => {
    it('should display tasks list sorted by "done" status', () => {
        const props = {
            handleTaskStatusChange: jest.fn(),
            handleTaskDelete: jest.fn(),
            tasks: [
                { text: 'Task 1', done: true, id: 'task-id-1' },
                { text: 'Task 2', done: false, id: 'task-id-2' },
                { text: 'Task 3', done: true, id: 'task-id-3' }
            ]
        };
        const wrappedComponent = shallow(<TasksList {...props} />);

        expect(wrappedComponent).toMatchSnapshot();
    });
});
