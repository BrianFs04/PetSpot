import React from "react";

//will get the pets name on the url
const url = window.location.href;
const urlSp = url.split("/");
let name;
if (urlSp.length === 5) {
  name = url.split("/")[4];
} else {
  name = 0;
}

//function that will display de adoption form by pet name
export default function Ask() {
  return (
    <form method="POST" action="http://localhost:1235/ask">
      <div className="card text-center bg-secondary text-white">
        <h5 className="card-header">Adoption form of {name}</h5>
      </div>
      <div className="card-body">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              required="required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              required="required"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              required="required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phone">Phone (optional)</label>
            <input type="text" className="form-control" name="phone" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="firstname">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              required="required"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstname">Do you have more pets?</label>
            <input
              type="text"
              className="form-control"
              name="more_pets"
              placeholder="How many?"
              required="required"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="firstname">Do you have kids?</label>
            <input
              type="text"
              className="form-control"
              name="have_kids"
              placeholder="How many?"
              required="required"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              placeholder="Ask us anything"
              rows="3"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
      </div>
    </form>
  );
}
