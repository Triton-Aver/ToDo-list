import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends Component {
    state = {
        value: '',
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    handleCreate = () => {
        this.props.onCreate(this.state.value);
        this.setState({
            value: '',
        });
    };

    render() {
        return (
            <div className="create-task">
                <input
                    className="create-task__input"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <button
                    className="btn create-task__btn"
                    onClick={this.handleCreate}
                >
                    Create
                </button>
            </div>
        );
    }
}

CreateTaskInput.propTypes = {
    onCreate: PropTypes.func.isRequired,
};

export default CreateTaskInput;
