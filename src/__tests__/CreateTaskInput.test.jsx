import React from 'react';
import { shallow } from 'enzyme';
import CreateTaskInput from '../CreateTaskInput';

describe('<CreateTaskInput />', () => {
    it('should create Task on submit', () => {
        const mockOnCreate = jest.fn();
        const wrappedComponent = shallow(
            <CreateTaskInput onCreate={mockOnCreate} />,
        );
        const fakeEvent = { target: { value: 'Visit a doctor' } };
        wrappedComponent
            .find('.create-task__input')
            .simulate('change', fakeEvent);
        wrappedComponent.find('.create-task__btn').simulate('click');

        expect(mockOnCreate).toBeCalledWith('Visit a doctor');
    });

    it('should create Task on submit', () => {
        const mockOnCreate = jest.fn();
        const wrappedComponent = shallow(
            <CreateTaskInput onCreate={mockOnCreate} />,
        );
        const fakeEvent = { target: { value: 'Visit a doctor' } };
        wrappedComponent
            .find('.create-task__input')
            .simulate('change', fakeEvent);
        wrappedComponent.find('.create-task__btn').simulate('click');

        expect(
            wrappedComponent.find('.create-task__input').prop('value'),
        ).toEqual('');
    });
});
