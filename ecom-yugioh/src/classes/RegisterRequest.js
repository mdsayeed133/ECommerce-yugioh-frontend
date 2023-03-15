class RegisterRequest {
  constructor(username, password, firstName, lastName, countryId) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.countryId= countryId;
  }
}
export default RegisterRequest;
