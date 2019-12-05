import React from "react";
import { connect } from "react-redux";
import { login,loginserver} from "../../action/Login";
import { LOGIN } from "../../action/actiontypes";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usertype: "",
      isloggedin: false,
      redirect:false
    };
  }

  handlechange = e => this.setState({ [e.target.name]: e.target.value });

  handleclick = () => {
    // console.log(this.state);
    // this.props.loginClick(this.state);
    // console.log(this.props.login);
    this.setState({redirect:true})

  };

  render() {
    if(this.state.redirect){
      return (<Redirect to="/client"></Redirect>)
    }
    return (
      <div className="jumbotron">
        
        <div className="row">
          <div className="col-md-2">UserName</div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={this.handlechange}
              name="username"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">Password</div>
          <div className="col-md-6">
            <input
              type="password"
              name="password"
              onChange={this.handlechange}
            ></input>
          </div>
        </div>
        <div className="row">
          <button
            className="btn btn-success"
            onClick={this.handleclick}
            type="button"
          >
            Login
          </button>
          <br/>
          {this.props.login && <label>{"Welcome "+ this.props.login.usertype}</label>}
        </div>
      </div>
    );
  }
}

const mapdispatchtoprops = dispatch =>{
  return {
    loginClick :(userdetails)=>dispatch(loginserver(userdetails))
  }
}

const mapStatetoProps =({login})=>{
  return {
    login
  }
}
// function mapStateToProps({
//   auth,
//   client: {
//     master: { allotedSubjectAgainstCombination },
//     attendance: { monthsBySem, attendanceReportByCombination, students_by_org },
//     userControls: { acCombinationDetail },
//     globalData: { systemConfig },
//     update,
//     ui
//   }
// }) {
//   return {
//     ui,
//     auth,
//     update,
//     acCombinationDetail,
//     allotedSubjectAgainstCombination,
//     monthsBySem,
//     attendanceReportByCombination,
//     systemConfig,
//     students_by_org
//   };
// }

export default connect(mapStatetoProps,mapdispatchtoprops)(Login);
