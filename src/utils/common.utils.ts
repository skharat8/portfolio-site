export function range(start: number, end?: number, step = 1) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  let res = [];
  for (let i = start; i < end; i += step) {
    res.push(i);
  }

  return res;
}

export function random(start: number, end: number) {
  return Math.floor(Math.random() * (end - start)) + start;
}

export function getIsMobileInitialState() {
  const QUERY = "(hover: hover) and (pointer: fine)";
  return !window.matchMedia(QUERY).matches;
}
