console.warn(Object.keys(console));

console.warn(Object.keys(globalThis));

console.warn("JSON" in globalThis);

console.warn("Intl" in globalThis);

console.warn("findLast" in Array.prototype);

console.warn("Nice".at(0)!);

console.warn(Promise.any([Promise.resolve(5), Promise.reject(2)]));

const value = await Promise.any([Promise.resolve(5), Promise.reject(2)]);
console.warn(value);

console.warn(5n);

const heyhey = [..."heyhey".matchAll(/hey/g)];
console.warn(heyhey);

(async () => {

const gg = await nice();
console.warn(gg);

async function nice(): Promise<number> {
  return 5;
}

})();