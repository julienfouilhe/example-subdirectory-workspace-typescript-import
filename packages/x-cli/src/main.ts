import { otherFn } from "@mycompany/x-core";

export function cli() {
  otherFn();
  return Promise.resolve(true);
}
