import React, { Component }     from 'react';
import PropTypes                from 'prop-types';
import { connect }              from 'react-redux';
import CreateTaskInput          from './CreateTaskInput';
import TasksList                from './TasksList';
import * as tasksAction         from '../tasks.actions';
import { sortTasksLostSelector }    from '../tasks.selectors';

class TodoList extends Component {
    
    componentDidMount() {
        this.props.getTasksList();
    }   

    render() {
        return (
            <>
                <h1 className="title">Todo List</h1>
                <main className="todo-list">
                    <CreateTaskInput
                        onCreate={this.props.createTask}
                    />
                    <TasksList
                        tasks={this.props.tasks}
                        handleTaskStatusChange={this.props.updateTask}
                        handleTaskDelete={this.props.deleteTask}
                    />
                </main>
            </>
        );
    }
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        done: PropTypes.bool,
        id: PropTypes.string,
    })),
    getTasksList: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
    getTasksList: tasksAction.getTasksList,
    updateTask: tasksAction.updateTask,
    deleteTask: tasksAction.deleteTask,
    createTask: tasksAction.createTask,
};

const mapState =  state => {
    return {
        tasks: sortTasksLostSelector(state),
    };
};

export default connect(mapState, mapDispatch)(TodoList);
