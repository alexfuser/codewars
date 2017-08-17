/*
You need to write a function ( addOrChangeUrlParameter(url, keyValueParameter) ) that can manipulate URL parameters.

It should be able to

    add a parameter to an existing URL,

but also to

    change a parameter if it already exists.

Example:


addOrChangeUrlParameter("www.example.com", "key=value") 
// -> 'www.example.com?key=value' (adds a parameter).

addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" ) 
// -> 'www.example.com?key=value&key2=value2' (adds another parameter).

addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" ) 
// ->'www.example.com?key=newValue' (changes the parameter).

*/


/**
 * Play with URLs
 * @param {string} url - The URL that's we want to manipulate
 * @param {string} param - The parameter that we want to change or add
 * @returns {string} The result URL.
 */
function addOrChangeUrlParameter(url, param) {
  // TODO: Make something awesome
   var key = param.split("=")[0];
    if(url.indexOf(key) === -1 && url.indexOf("?") === -1) return url + "?" + param;
    else if(url.indexOf(key) === -1 && url.indexOf("?") !== -1) return url + "&" + param;
    else if(param){
      var ind = url.indexOf(key)
      return url.slice(0, ind) + param
    }else return url
}


/* Mejor práctica y refactorizado
function addOrChangeUrlParameter (url, param) {
  url = url.replace(new RegExp(param.split('=')[0]+'=[^&]*'), param);
  return url + (url.indexOf(param) >= 0 ? '' : (url.indexOf('?')>=0?'&':'?')+param);
}
*/