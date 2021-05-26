import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    //мы объявляем метод с помощью синтаксиса стрелочной функции - не получилось
    //поэтому пока просто методом классическим сделали с байндом
    activateEditMode = () => {
        //как изменить state - для этого есть метод из React.Component
        //в него мы должны передать объект,свойства которго перезапишут те свойства, которые были в state
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        {/*при нажатии на текст отроется input, где мы сможем его отредактировать */}
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        {/*onBlur срабатывает, котгда фокус из элемента уходит*/}
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}></input>
                    </div>
                }
            </div>
        );
    };
};

export default ProfileStatus;