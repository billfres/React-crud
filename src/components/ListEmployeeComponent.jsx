import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this); 
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id)});
        });
        alert('Employee deleted successfully => '+ JSON.stringify(id));
    }  

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    } 

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }
   
    //whener we click on addEmployee, we'd navigate then to createEmployee
    addEmployee(){
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row"></div>
                    <button className="btn btn-primary mb-3" onClick={this.addEmployee}> Add Employee</button>
                

                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button onClick = { () => this.editEmployee(employee.id)} className="btn btn-info">Update</button>                                           
                                            <button onClick = { () => this.deleteEmployee(employee.id)} className="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
                                            <button onClick = { () => this.viewEmployee(employee.id)} className="btn btn-info" style={{marginLeft: "10px"}}>View</button>
                                        </td>   
                                    </tr>
                                ) 
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;