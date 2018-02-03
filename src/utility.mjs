import R from 'ramda';

export const reduce = (pred, xs) => R.apply(R.reduce(pred), R.juxt([R.head, R.tail])(xs));
export const maxBy = (pred, xs) => reduce(R.maxBy(pred), xs);  // reduce(R.maxBy(pred))でもよいけど、引数が消えるとわかりづらくなりそうだったので……。
export const indexed = (xs) => R.addIndex(R.map)(R.constructor(Array), xs);
export const maxIndexBy = (pred, xs) => maxBy(R.apply(pred), indexed(xs))[1];
export const adjustPath = (path, func, xs) => R.assocPath(path, func(R.path(path, xs)), xs);
