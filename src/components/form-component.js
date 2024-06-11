
/* eslint-disable */
import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const countryOptions = ["USA", "India", "Canada"]; // Add more country options as needed
const cityOptions = {
  USA: ["New York", "Los Angeles", "Chicago"],
  India: ["Mumbai", "Delhi", "Bangalore"],
  Canada: ["Toronto", "Vancouver", "Montreal"],
};

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      phoneNumber: "",
      country: "",
      city: "",
      panNumber: "",
      aadharNumber: "",
      showPassword: false,
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      phoneNumberError: "",
      countryError: "",
      cityError: "",
      panNumberError: "",
      aadharNumberError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "username",
      "emailAddress",
      "password",
      "passwordConfirmation",
      "phoneNumber",
      "country",
      "city",
      "panNumber",
      "aadharNumber"
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    switch (name) {
      case "firstName":
        isValid = this.validateFirstName();
        break;
      case "lastName":
        isValid = this.validateLastName();
        break;
      case "username":
        isValid = this.validateUsername();
        break;
      case "emailAddress":
        isValid = this.validateEmailAddress();
        break;
      case "password":
        isValid = this.validatePassword();
        break;
      case "passwordConfirmation":
        isValid = this.validatePasswordConfirmation();
        break;
      case "phoneNumber":
        isValid = this.validatePhoneNumber();
        break;
      case "country":
        isValid = this.validateCountry();
        break;
      case "city":
        isValid = this.validateCity();
        break;
      case "panNumber":
        isValid = this.validatePanNumber();
        break;
      case "aadharNumber":
        isValid = this.validateAadharNumber();
        break;
      default:
        break;
    }
    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";

    this.setState({
      firstNameError
    });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";

    this.setState({
      lastNameError
    });
    return lastNameError === "";
  }

  validateUsername() {
    let usernameError = "";
    const value = this.state.username;
    if (value.trim() === "") usernameError = "Username is required";

    this.setState({
      usernameError
    });
    return usernameError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim() === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({
      emailAddressError
    });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim() === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError
    });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    if (this.state.password !== this.state.passwordConfirmation)
      passwordConfirmationError = "Password does not match Confirmation";

    this.setState({
      passwordConfirmationError
    });
    return passwordConfirmationError === "";
  }

  validatePhoneNumber() {
    let phoneNumberError = "";
    const value = this.state.phoneNumber;
    if (value.trim() === "") phoneNumberError = "Phone Number is required";

    this.setState({
      phoneNumberError
    });
    return phoneNumberError === "";
  }

  validateCountry() {
    let countryError = "";
    const value = this.state.country;
    if (value.trim() === "") countryError = "Country is required";

    this.setState({
      countryError
    });
    return countryError === "";
  }

  validateCity() {
    let cityError = "";
    const value = this.state.city;
    if (value.trim() === "") cityError = "City is required";

    this.setState({
      cityError
    });
    return cityError === "";
  }

  validatePanNumber() {
    let panNumberError = "";
    const value = this.state.panNumber;
    if (value.trim() === "") panNumberError = "PAN Number is required";

    this.setState({
      panNumberError
    });
    return panNumberError === "";
  }

  validateAadharNumber() {
    let aadharNumberError = "";
    const value = this.state.aadharNumber;
    if (value.trim() === "") aadharNumberError = "Aadhar Number is required";

    this.setState({
      aadharNumberError
    });
    return aadharNumberError === "";
  }

  togglePasswordVisibility() {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword
    }));
  }

  render() {
    return (
      <div className="main">
        <h3>SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Username: {this.state.username}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>Phone Number: {this.state.phoneNumber}</div>
            <div>Country: {this.state.country}</div>
            <div>City: {this.state.city}</div>
            <div>PAN Number: {this.state.panNumber}</div>
            <div>Aadhar Number: {this.state.aadharNumber}</div>
          </div>
        ) : (
          <div style={{textAlign:"center"}}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.firstNameError && (
                <div className="errorMsg">{this.state.firstNameError}</div>
              )}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.lastNameError && (
                <div className="errorMsg">{this.state.lastNameError}</div>
              )}
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.usernameError && (
                <div className="errorMsg">{this.state.usernameError}</div>
              )}
              <input
                type="email"
                placeholder="Email Address"
                name="emailAddress"
                value={this.state.emailAddress}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.emailAddressError && (
                <div className="errorMsg">{this.state.emailAddressError}</div>
              )}
              <div style={{ position: "relative" }}>
                <input
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={this.togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    height: "100%",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer"
                  }}
                >
                  {this.state.showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <br />
              {this.state.passwordError && (
                <div className="errorMsg">{this.state.passwordError}</div>
              )}
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.passwordConfirmationError && (
                <div className="errorMsg">
                  {this.state.passwordConfirmationError}
                </div>
              )}
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.phoneNumberError && (
                <div className="errorMsg">{this.state.phoneNumberError}</div>
              )}
              <select
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              >
                <option value="">Select Country</option>
                {countryOptions.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <br />
              {this.state.countryError && (
                <div className="errorMsg">{this.state.countryError}</div>
              )}
              <select
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                disabled={!this.state.country}
              >
                <option value="">Select City</option>
                {this.state.country &&
                  cityOptions[this.state.country].map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
              <br />
              {this.state.cityError && (
                <div className="errorMsg">{this.state.cityError}</div>
              )}
              <input
                type="text"
                placeholder="PAN Number"
                name="panNumber"
                value={this.state.panNumber}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.panNumberError && (
                <div className="errorMsg">{this.state.panNumberError}</div>
              )}
              <input
                type="text"
                placeholder="Aadhar Number"
                name="aadharNumber"
                value={this.state.aadharNumber}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.aadharNumberError && (
                <div className="errorMsg">{this.state.aadharNumberError}</div>
              )}
              <button type="submit">Signup</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default FormComponent;
