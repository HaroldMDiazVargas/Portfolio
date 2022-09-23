export function eventHandler(querySelect, eventName, eventFunc) {
  document
    .querySelectorAll(querySelect)
    .forEach((item) => item.addEventListener(eventName, eventFunc));
}
