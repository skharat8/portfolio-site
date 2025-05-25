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
