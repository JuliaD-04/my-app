import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    //мы объявляем метод с помощью синтаксиса стрелочной функции - не получилось
    activateEditMode = () => {
        //как изменить state - для этого есть метод из React.Component
        //в него мы должны передать объект,свойства которго перезапишут те свойства, которые были в state
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        //мы отредактировали, новый статус появился в LS и мы его диспатчим в GS
        this.props.updateStatus(this.state.status);
    }
    //мы узнаем какое новое значение статуса
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    //в метод приходят старые пропсы и старый стейт
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {/*не true, не истина, false*/}
                {!this.state.editMode &&
                    <div>
                        {/*при нажатии на текст отроется input, где мы сможем его отредактировать */}
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                    </div>
                }
                {/*true*/}
                {this.state.editMode &&
                    <div>
                        {/*onBlur срабатывает, котгда фокус из элемента уходит*/}
                        <input onChange={this.onStatusChange} autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               // показываем статус не из пропсов, а из стейта локального
                               value={this.state.status} />
                    </div>
                }
            </div>
        );
    };
};

export default ProfileStatus;