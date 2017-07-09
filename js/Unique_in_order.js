var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
    var result = [];
    var last;
  
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push(last = iterable[i]);
    }
  }
  
  console.log(result);
}


var it = 'AAAABBBCCDAABBB';
uniqueInOrder(it);