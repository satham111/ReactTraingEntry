import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.deletehandleAction = this.deletehandleAction.bind(this);
  }
  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      let userData = JSON.parse(sessionStorage.getItem("userData"));
      console.log(userData);

      console.log(this.state);
      this.setState({
        users: userData
      });
    }
  }
  deletehandleAction(e) {
    let updateIndex = e.target.getAttribute("value");
    this.state.users.splice(updateIndex, 1);
    this.setState({ users: this.state.users });
    sessionStorage.setItem("userData", JSON.stringify(this.state.users));
    alert("User hasbeen Deleted  ");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div className="text-center">
              {this.state.users.length > 0 ? (
                <h2 className="texalign">Entry Details</h2>
              ) : (
                <h2 className="texalign"> No Records Found</h2>
              )}
            </div>
          </div>
        </div>
        {this.state.users.length > 0 ? (
          <div className="tableOrder">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>User Group </th>
                  <th>Employee ID</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              {this.state.users.map((d, index) => (
                <tbody>
                  {" "}
                  <tr>
                    <td>{d.group_id}</td>
                    <td>{d.user_id}</td>
                    <td>{d.first_name}</td>
                    <td>{d.last_name}</td>
                    <td>{d.age}</td>

                    <td>
                      <Link to={"/edit/" + index}>
                        <button type="button">Edit</button>
                      </Link>
                      <button
                        onClick={this.deletehandleAction}
                        id={d.user_id}
                        value={index}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Home;
