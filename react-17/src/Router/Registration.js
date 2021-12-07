import React, { Component } from "react";

class Registration extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    mobile: "",
  };
  updateHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submitHandler = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5">
              <form onSubmit={this.submitHandler}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="user name"
                    onChange={this.updateHandler}
                    name="userName"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    onChange={this.updateHandler}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="mobile"
                    onChange={this.updateHandler}
                    name="mobile"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="password"
                    onChange={this.updateHandler}
                    name="password"
                  />
                </div>
                <button className="btn btn-primary">Registration</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Registration;
