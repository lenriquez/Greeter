
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

  global.Greetr = global.G$ = Greetr;
 
}(window, jQuery));