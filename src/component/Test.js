import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usergroup: ["Government", "Private", "Trust"],
      users: [],
      group_id: "",
      user_id: "",
      first_name: "",
      last_name: "",
      age: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("test");
    console.log(this.state);
    const user = {
      group_id: this.state.group_id,
      user_id: this.state.user_id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age
    };
    this.state.users.push(user);
    console.log("user:" + user);
    if (
      this.state.group_id &&
      this.state.user_id &&
      this.state.first_name &&
      this.state.last_name &&
      this.state.age
    ) {
      this.state.users.push(user);
      sessionStorage.setItem("userData", JSON.stringify(this.state.users));
      alert("User Added Successfully");
    }
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { usergroup } = this.state;
    return (
      <div id="test" className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div className="text-center" />
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label id="usergroup1">User Group:</label>

            <div className="form-group">
              <select
                name="group_id"
                className="form-control"
                onChange={this.handleChange}
              >
                {usergroup.map((usergroups, key) => {
                  return (
                    <option name="group_id" key={key} value={usergroups}>
                      {" "}
                      {usergroups}{" "}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label name="userid">Employee Id:</label>

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
              <label name="firstName">First Name :</label>

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
              <label name="lastName">Last Name :</label>

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
              <label name="age">Age :</label>

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
