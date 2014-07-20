'use strict';

var app = angular.module('App', []);

app.controller('MainCtrl', function() {
  this.title = 'Some title';
  this.isSparta = 'Leonidas!!!';
});
var validation = {
  email: {
    dirty: false,
    field: null,
    wrapper: null,
    valid: null
  },
  form: null,
  name: {
    dirty: false,
    field: null,
    wrapper: null,
    valid: null
  }
};

//form sumbitinig validation
validation.checkForm = function() {
  validation.email.validate();
  validation.name.validate();
  return validation.email.valid && validation.name.valid;
};

//validating email by regexp
validation.email.isValid = function(emailAddress) {
  var validationResult = false,
    emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailAddress && emailRegExp.test(emailAddress)) {
    validationResult = true;
  }
  return validationResult;
};

//checking name minlength=6
validation.name.isValid = function(name) {
  var validationResult = false;
  // I assumed that the name must be at leas 6 characters long and no other requirements
  if (name && typeof name === 'string' && name.length >= 6) {
    validationResult = true;
  }
  return validationResult;
};

//displaying and hiding error messages
validation.showMessage = function(object, show) {
  if (show) {
    validation[object].wrapper.className = 'playForm__field playForm__field-error';
  } else {
    validation[object].wrapper.className = 'playForm__field';
  }
};

//main email validation function
validation.email.validate = function() {
  validation.email.valid = validation.email.isValid(validation.email.field.value);
  validation.showMessage('email', !validation.email.valid);
  //first we bound validation on blur to not attack user with error message after typing one letter, but if he made an error and is typing again, the error message should disappear in the moment when correct value is entered
  if (!validation.email.dirty) {
    validation.email.dirty = true;
    validation.email.field.onkeyup = validation.email.validate;
  }
};

//main name validation function
validation.name.validate = function() {
  validation.name.valid = validation.name.isValid(validation.name.field.value);
  validation.showMessage('name', !validation.name.valid);
  //the same as with email
  if (!validation.name.dirty) {
    validation.name.dirty = true;
    validation.name.field.onkeyup = validation.name.validate;
  }
};

//binding DOM elements to properties and binding events
validation.init = function() {
  validation.email.field = document.getElementById('email');
  validation.email.wrapper = document.getElementById('emailWrapper');
  validation.form = document.getElementById('playForm');
  validation.name.field = document.getElementById('name');
  validation.name.wrapper = document.getElementById('nameWrapper');

  // validation.email.field.onblur = validation.email.validate;
  // validation.name.field.onblur = validation.name.validate;
  // validation.form.onsubmit = validation.checkForm;
};

validation.init();