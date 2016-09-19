
(function(global, $){
 
  // Private variables
  var supportedLangs = ['en','es']; 
  var greetings = { 
    en: 'Hello',
    es: 'Hola'
  }

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  }

  var logMessages = {
    en: 'Logged in',
    es: 'Inició sesión'
  }

  // Construture 
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName. lastName, language);
  }

  // Object Constructure
  Greetr.init = function(firstName, lastName, language){
    var self = this;
    self.firstName = firstName || '';
    self.lastName  = lastName  || '' ;
    self.language  = language  || 'en'
  }

  // Creating a prototype to add methods to my object
  Greetr.prototype = {
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    },
    validate: function(){
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName;
    },
    formalGreetings: function(){
      return formalGreetings[this.language] + ' ' + this.fullName();
    },
    greet: function(){
      var msg;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreetings();
      }
      else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }
      // 'this' referes to the calling object at execution time
      // make the methid chainable
      return this;
    },
    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ':' + this.fullName());

        return this;
      }
    },
    setLang: function(lang){
      this.language = lang;
      this.validate();
      return this;
    }
  }

  // Set my prototype to the returning object's prototype
  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.G$ = Greetr;
 
}(window, jQuery));