# Bedrock Script API

A type-safe configuration for Bedrock Script API behavior packs!

Learning about Bedrock's Script API, and I was curious about what kinds of APIs the runtime supports, and what modules are available in the client. This seems to be the subset of what is available. I want to ensure that it's possible to have a type-safe API surface before trying to write scripts there. This is very cool!

Say like when you use a Service Worker in TypeScript for example, you don't want to have type-access to things like `window`, because that's not available in that context. Just like how you don't want typings for the Service Worker APIs in your client modules (this is talking about the browser itself). This is meant to explore and document what is available in the Bedrock Script API surface, and exclude anything else that's not available. You don't want to accidentally call `setTimeout()` for example, as that's [not supported in this environment](https://wiki.bedrock.dev/scripting/api-environment#common-problems) specifically, because the timing of scripts is relative to the ticks in-game, rather than the event cycle of the JS engine. [Window: setTimeout() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)

[@minecraft - npm search](https://www.npmjs.com/search?q=%40minecraft)
- I just installed all of the available modules (that worked), so then we can get full API coverage for what seems to be available in any addon that wants to use them.

[Engine Environment - Bedrock Wiki](https://wiki.bedrock.dev/scripting/api-environment)
- Found out about the documentation for the environment itself, and that it's built on a fork of QuickJS. I was looking to see what APIs were available as part of the standard library, that seemed the most interesting to me, say like if you could use generators, Promises, modern language features. QuickJS itself is up to ES2023 from the sounds of it, I'm not sure if Mojang's build is up to that level though, we'll have to test things out to find out. Could always use polyfills and TypeScript transpilation for older language targets though, so things can probably work out nice either way.

[QuickJS Types](https://github.com/mgred/quickjs-types)
- These are the typings for QuickJS itself. The standard lib `os` is almost certainly not available, because it is rooted in lower-level features that just wouldn't make sense in the context of this API surface and what it is meant to be used for. I'm not sure about `import * as std from "std"` though, I want to try that one.