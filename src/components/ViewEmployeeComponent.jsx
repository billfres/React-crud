import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
        /*this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this); */
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            this.setState({employee: res.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">View Employee Details</h2>
                    <div className="card-body">
                        <div className="row">
                            <label htmlFor="">Employee First Name :</label>
                            <div> { this.state.employee.firstName}</div>
                        </div>
                        <div className="row">
                            <label htmlFor="">Employee Last Name :</label>
                            <div> { this.state.employee.lastName}</div>
                        </div>
                        <div className="row">
                            <label htmlFor="">Employee Email Id :</label>
                            <div> { this.state.employee.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;