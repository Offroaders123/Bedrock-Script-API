/// <reference no-default-lib="true"/>
/// <reference lib="es2015" />
/// <reference lib="es2016.array.include" />
/// <reference lib="es2017.object" />
/// <reference lib="es2017.sharedmemory" />
/// <reference lib="es2017.string" />
/// <reference lib="es2017.typedarrays" />
/// <reference lib="es2017.date" />
/// <reference lib="es2018.asynciterable" />
/// <reference lib="es2018.asyncgenerator" />
/// <reference lib="es2018.promise" />
/// <reference lib="es2018.regexp" />
/// <reference lib="es2019.array" />
/// <reference lib="es2019.object" />
/// <reference lib="es2019.string" />
/// <reference lib="es2019.symbol" />
/// <reference lib="es2020.date" />
/// <reference lib="es2020.number" />
/// <reference lib="es2020.promise" />
/// <reference lib="es2020.sharedmemory" />
/// <reference lib="es2020.string" />
/// <reference lib="es2020.symbol.wellknown" />

declare var AggregateError: AggregateErrorConstructor;

interface AggregateError extends Error {}

interface AggregateErrorConstructor extends ErrorConstructor {
  new (message?: string): AggregateError;
  (message?: string): AggregateError;
  readonly prototype: AggregateError;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console) */
interface Console {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/error_static) */
  error(...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/info_static) */
  info(...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/log_static) */
  log(...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/warn_static) */
  warn(...data: any[]): void;
}

declare var console: Console;

declare function __date_clock(): number;

declare var InternalError: InternalErrorConstructor;

interface InternalError extends Error {}

interface InternalErrorConstructor extends ErrorConstructor {
  new (message?: string): InternalError;
  (message?: string): InternalError;
  readonly prototype: InternalError;
}