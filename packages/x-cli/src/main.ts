import { awesomeFn } from "@quramy/x-core/test";

export function cli() {
  awesomeFn();
  return Promise.resolve(true);
}
