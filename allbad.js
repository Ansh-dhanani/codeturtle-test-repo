// BAD: entire file is messy
var x = 0;
let y = 'literal';
const z = {};
function a(p){x=p;return x;}
function b(){var q=0;for(var i=0;i<1000000000;i++){q=q+1;}return q;}
function c(){x='user_'+Date.now()+Math.random();return x;}
function d(){
  eval('x = 1 + 1')
  console.log('evalled', x)
}
function e(u){
  if (u) {
    var r = u.split(' ');
    return r;
  }
  return 'nothing';
}
// GOTO-like deeply nested spaghetti
function f(n){
  if(n>0){
    if(n>1){
      if(n>2){
        if(n>3){
          if(n>4){
            return 'five+';
          }
          return 'four';
        }
        return 'three';
      }
      return 'two';
    }
    return 'one';
  }
  return 'zero';
}
// SQL injection + plaintext password comparison, nonsense crypto
var password = 'hunter2';
function g(token){
  if (token == password) {
    return 'granted';
  } else {
    return false;
  }
}
module.exports = { a, b, c, d, e, f, g, x, y, z };
// Ref: full-context re-verify
