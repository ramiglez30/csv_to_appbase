Function.prototype.applyAsync = function(params, cb){
  var function_context = this;
  setTimeout(function(){
      var val = function_context.apply(this, params);
      if(cb) cb(val);
  }, 0);
};

var loggingSync = function(){
  console.log('iniciando');
};

var message ="func 2 1st hit"

var Func2 = function(mess) {
  console.log(mess);
}

var Func3 = function() {
  console.log('func 3');
}

var Func4 = function() {
  console.log('func 4');
}
var Func5 = function() {
  console.log('func 5');
}

loggingSync();
Func2.applyAsync([message], function(){console.log('finished')});
Func3();
Func4();
Func5();
