/*
Input:

    a string strng
    an array of strings arr

Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

    a boolean true if all rotations of strng are included in arr (C returns 1)
    false otherwise (C returns 0)

#Examples:

contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

Note:

Though not correct in a mathematical sense

    we will consider that there are no rotations of strng == ""
    and for any array arr: contain_all_rots("", arr) --> true

Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations
Bash:

For bash the array is replaced by a string (see "RUN sample tests).

*/


function containAllRots(str, arr) {
    for(let i =0; i<str.length;i++) {
      temp=str.slice(i,str.length)+str.slice(0,i)
      if (arr.indexOf(temp)<0) return false
  }
  return true
}
