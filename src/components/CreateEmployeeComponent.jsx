import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            //Step 2 (gettting an id)
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this); 
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this); 
        this.changeEmailHandler = this.changeEmailHandler.bind(this); 
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    //Step 3 to update using one component
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName, 
                    lastName: employee.lastName, 
                    emailId: employee.emailId
                });
            });
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee =>' + JSON.stringify(employee));
        
        //Step 5
        if(this.state.id === '_add'){
            alert('Employee added successfully => '+ JSON.stringify(employee));
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            alert('Employee updated successfully => '+ JSON.stringify(employee));
            EmployeeService.updateEmployeeById(this.state.id,employee).then( res =>{
                this.props.history.push('/employees');
            });
        }
        
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

   getTitle = () => {
        
        if(this.state.id === '_add'){
            return <h2 className = "text-center">Add Employee</h2>
        }else{
            return <h2 className = "text-center">Update Employee</h2>
        }
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                            <div className = "card-body">
                                <form >
                                    <div className = "form-group">
                                    <label>First Name: </label>
                                    <input name="firstName" className="form-control" placeholder="First Name"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className = "form-group">
                                    <label >Last Name: </label>
                                    <input name="lastName" className="form-control" placeholder="Last Name"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className = "form-group">
                                    <label >Email Id: </label>
                                    <input name="emailId" className="form-control" placeholder="Email Address"
                                        value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee} style={{marginTop: "5px"}}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px",marginTop: "5px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;