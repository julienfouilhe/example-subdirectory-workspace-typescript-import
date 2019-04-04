import { fn } from "@mycompany/x-core/test";

export function cli() {
  fn();
  return Promise.resolve(true);
}
