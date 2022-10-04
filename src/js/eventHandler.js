export function eventHandler(querySelect, eventName, eventFunc) {
  document
    .querySelectorAll(querySelect)
    .forEach((item) => item.addEventListener(eventName, eventFunc));
}

export function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
