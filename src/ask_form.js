import React from "react";
//import { Col, Row, Card, Button } from "react-bootstrap";
//import Form from "react-bootstrap/Form";

export default function Ask() {
  return (
    <form method="POST" action="http://localhost:1235/ask">
      <div class="card text-center bg-secondary text-white">
        <h5 class="card-header">Adoption Form</h5>
      </div>
      <div class="card-body">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="firstname">First Name</label>
            <input type="text" class="form-control" name="firstname" required="required" />
          </div>
          <div className="form-group col-md-6">
            <label for="lastname">Last Name</label>
            <input type="text" class="form-control" name="lastname" required="required" />
          </div>
        </div>
        <div className="form-row">
          <div class="form-group col-md-6">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="email" required="required" />
          </div>
          <div class="form-group col-md-6">
            <label for="phone">Phone (optional)</label>
            <input type="text" class="form-control" name="phone" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label for="firstname">Address</label>
            <input type="text" class="form-control" name="address" required="required" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="firstname">Do you have more pets?</label>
            <input type="text" class="form-control" name="more_pets" placeholder="How many?" required="required" />
          </div>
          <div className="form-group col-md-6">
            <label for="firstname">Do you have kids?</label>
            <input type="text" class="form-control" name="have_kids" placeholder="How many?" required="required" />
          </div>

        </div>
        <div className="form-row">
          <div class="form-group col-md-12">
            <label for="message">Message</label>
            <textarea class="form-control" name="message" placeholder="Ask us anything" rows="3"></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-outline-dark">Submit</button>
      </div>
    </form>
  )
}
