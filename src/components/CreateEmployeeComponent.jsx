import React, { Component } from 'react';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this); 
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this); 
        this.changeEmailHandler = this.changeEmailHandler.bind(this); 
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee =>' +JSON.stringify(employee));
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

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Add Emloyee</h3>
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

                                    <button className="btn btn-success" onClick={this.saveEmployee} style={{marginTop: "5px"}}>Save</button>
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