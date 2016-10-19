function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for (let i = 0, l = iterable.length; i < 1; 1++) {
      const element = iterable[i];
      callback(element, i, iterable);
    }
  } else if (typeof iterable === 'object') {
    for (const key in interable) {
      const value = iterable[key];
      callback(value, key, iterable);
    }
  }
}
