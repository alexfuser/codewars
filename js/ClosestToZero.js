/*
Simply find the closest value to zero from the list. Notice that there are negatives in the list.

List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

Examples:

[2, 4, -1, -3]  => -1
[5, 2, -2]      => None
[5, 2, 2]       => 2
[13, 0, -6]     => 0

*/

function closest(arr){
   // return null if it is not possible to return 1 unique closest value
    var newTs = arr.map((e) => Math.abs(e));
    var closest = Math.min.apply(null, newTs);
    if (arr.includes(closest) && !arr.includes(-closest)){
      return closest;
    }else if (!arr.includes(closest) && arr.includes(-closest)){
      return (-closest);
    }else if (closest === 0){
      return 0;
    }else{
      return null;
    }
}

/* Mejor práctica y refactorizado

function closest(arr){
   var sorted = arr.sort((x,y) => Math.abs(x) - Math.abs(y));
   return sorted[0] != -1*sorted[1] && sorted[0] != -1*sorted[2] ? sorted[0] : null;
}

*/