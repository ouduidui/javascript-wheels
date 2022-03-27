const to = require('../../src/promise/awaitToJs/index.js');

describe('await-to-js', () => {
  it("resolve", async () => {
    const p = Promise.resolve(1);
    const [err, res] = await to(p);
    expect(err).toBe(null);
    expect(res).toBe(1);
  })

  it('reject', async () => {
    const p = Promise.reject(1);
    const [err, res] = await to(p);
    expect(err).toBe(1);
    expect(res).toBe(undefined);
  })
})