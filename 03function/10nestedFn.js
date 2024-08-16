function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); // Logs 6 (which is 1 + 2 + 3)

A(4); // 4+2+3 = 9

// ---------------------------

function P(x) {
    function Q(y) {
      function R(z) {
        console.log(x + y + z);
      }
      return R;
    }
    return Q;
  }
  

var q =P(4)
console.log(q) // [Function: Q]
var r = q(5)
console.log(r) // [Function: R]
r(6) // 6+5+4 = 15