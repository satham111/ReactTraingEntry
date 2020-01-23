import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("test");
    console.log(this.state);
    const user = {
      user_id: this.state.user_id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age
    };
    this.state.users.push(user);
    console.log("user:" + user);
  };

  render() {
    return (
      <div class="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div className="text-center">
              <h1 className="texalign">Registration Form</h1>
            </div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="usergroup">User Group:</label>

            <div className="form-group">
              <select className="form-control" onChange={this.handleChange}>
                <option value="" selected>
                  Select User
                </option>
                <option href> Government Sector </option>
                <option value="all">Private Sector</option>
                <option value="all">Trust Sector</option>
              </select>
            </div>
            <div className="form-group">
              <label id="userid">Employee Id:</label>

              <input
                type="user_id"
                className="form-control"
                name="user_id"
                placeholder="Employee Id"
                onChange={this.handleChange}
                required
                pattern="[a-zA-Z0-9]{6,}"
                title="Must contain at least 6 or more characters"
              />
            </div>
            <div className="form-group">
              <label for="firstName">First Name :</label>

              <input
                className="form-control"
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={this.handleChange}
                pattern="[a-zA-Z ]{1,10}"
                required
              />
            </div>

            <div className="form-group">
              <label for="lastName">Last Name :</label>

              <input
                className="form-control"
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={this.handleChange}
                required
                pattern="[a-zA-Z ]{1,10}"
              />
            </div>
            <div className="form-group">
              <label for="age">Age :</label>

              <input
                className="form-control"
                type="number"
                name="age"
                min="0"
                max="60"
                placeholder="age"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <button type="onSubmit" className="btn btn-primary btn-block">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Test;