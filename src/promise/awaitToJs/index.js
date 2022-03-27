/**
 * await to js
 * @param {Promise} promise 
 * @return {Promise<[Error | undefined] | [null | *]>}
 */
function to(promise) {
  try{
    return promise.then(res => [null, res], err => [err, undefined]);
  }catch(e) {
    return [e, undefined];
  }
}

module.exports = to
