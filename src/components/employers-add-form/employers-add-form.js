import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
        
    }

    render() {
        const {name, salary} = this.props;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}                        
                        placeholder="Как его зовут?" />
                    <input type="number"
                        className="form-control new-post-label"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}
                        placeholder="З/П в $?" />
    
                    <button 
                        type="submit"
                        className="btn btn-outline-light"
                            >Добавить</button>
                </form>
            </div>
        )
    }
    
}

export default EmployersAddForm;