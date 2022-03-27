# await-to-js

> [How to write async await without try-catch blocks in Javascript](https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/)
>
> [github - await-to-js](https://github.com/scopsy/await-to-js)

## 需求

当我们使用`async + await`去处理异步的时候，通常我们都需要使用`try-catch`去实现错误处理。

因此我们可以将其封装成一个函数，从而当我们每次想要使用`async + await`的话，不再需要使用`try-catch`去进行错误处理。

## 实现

```javascript
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
```