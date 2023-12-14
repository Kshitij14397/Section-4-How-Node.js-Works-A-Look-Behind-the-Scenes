//# Section 4: How Node.js Works: A Look Behind The Scenes

//# 39. Requiring Modules in Practice

// class Calculator {
//     add(a,b)
//     {
//         return a+b;
//     }

//     multiply(a, b)
//     {
//         return a*b;
//     }

//     divide(a, b)
//     {
//        return a/b;
//     }
// }

module.exports = class {
    add(a,b)
  {
      return a+b;
  }

   multiply(a, b)
  {
       return a*b;
  }

    divide(a, b)
   {
      return a/b;
   }
}