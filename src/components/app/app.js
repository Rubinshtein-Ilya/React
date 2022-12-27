import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, like: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: false, like: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, like: false, id: 3}
            ]    
        }
        this.newId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            // return {
            //     data: newArr
            // }
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false, 
            id: this.newId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    render() {
        const emploees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return(
            <div className="app">
                <AppInfo emploees={emploees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProps={this.onToggleProp}/>
                <EmployersAddForm 
                    onAdd={this.addItem}/>
            </div>
        );
    }
}
 
export default App;