Object;
Function;
Error;
EvalError;
RangeError;
ReferenceError;
SyntaxError;
TypeError;
URIError;
InternalError;
AggregateError;
Array;
Int8Array;
Uint8Array;
Int16Array;
Uint16Array;
Int32Array;
Uint32Array;
Float32Array;
Float64Array;
SharedArrayBuffer;
ArrayBuffer;
Uint8ClampedArray;
parseInt;
parseFloat;
isNaN;
isFinite;
decodeURI;
encodeURI;
decodeURIComponent;
encodeURIComponent;
escape;
unescape;
NaN;
Infinity;
undefined;
__date_clock;
Number;
Boolean;
String;
Symbol;
Math;
Reflect;
// eval; (supported, has to be enabled in the manifest)
globalThis;
Date;
RegExp;
JSON;
Proxy;
Map;
Set;
WeakMap;
WeakSet;
DataView;
Promise;
console;
console.log;
console.warn;
console.error;
console.info;

// will probably error

// Atomics; // not supported
// BigInt; // not supported
// BigUint64Array; // not supported
// Intl; // not supported
// SharedArrayBuffer; true?? nice!

console.warn("Atomics", "Atomics" in globalThis);
console.warn("BigInt", "BigInt" in globalThis);
console.warn("BigUint64Array", "BigUint64Array" in globalThis);
console.warn("Intl", "Intl" in globalThis);
console.warn("SharedArrayBuffer", "SharedArrayBuffer" in globalThis);