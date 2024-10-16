/// <reference no-default-lib="true"/>
/// <reference lib="es2020" />

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