import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  //This class takes data from the contact form and send it to
  //the endopoint send
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    //curl POST type
    axios({
      method: "POST",
      url: "http://localhost:1235/send",
      data: {
        name: name,
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    //This clean up the form then the data was send to email
    document.getElementById("contact-form").reset();
  }

  render() {
    //This is the boostrap form structure
    return (
      <div className="message">
        <div className="cat_message">
          <div className="col-sm-4 offset-sm-4 pad_bot">
            <form
              className="move_form"
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
