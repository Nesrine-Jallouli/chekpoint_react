import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Formulaire d'inscription  </h1>
<form class="row g-3 needs-validation" novalidate>
  <div class="input-group">
    <span class="input-group-text">First and Last Name</span>
    <input type="text" aria-label="First name" class="form-control" id="validationCustom01"required/>
    <input type="text" aria-label="Last name" class="form-control" id="validationCustom01"required/>
  </div>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Jallouli" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Nesrine" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>

      <select class="form-select" id="validationCustom04" required>
      <option selected>Please choose your domaine</option>
      <option value="1">gmail.com</option>
      <option value="2">gmail.fr</option>
      <option value="3">yahoo.fr</option>
      <option value="4">otlook.com</option>
    </select>
    </div>
  </div>
  <div class="row g-3 align-items-center">
  
  <label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5"  class="form-control" minlength="8" maxlength="20" aria-describedby="passwordHelpBlock" id="validationCustom03" required/>
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long
  </div>

</div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Sexe</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected>choose your sexe</option>
      <option value="1">Boy</option>
      <option value="2">Girl</option>
    </select>
    <div class="invalid-feedback">
      Please select your sexe.
    </div>
  </div>
  <div class="col-md-3">

    <label for="validationCustom05" class="form-label">Date of Birth</label>
    <input type="date" class="form-control" id="validationCustom05" required/>
    <div class="invalid-feedback">
      Please provide a valid date of Birth
.
    </div>
  </div>


  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Agree to terms and conditions</label>
  <div class="invalid-feedback">
        You must agree before submitting.
      </div>
</div>

  
  <div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

    </div>
  );
}

export default App;
