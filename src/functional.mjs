import R from 'ramda';

const lunchBoxes = [{'唐揚げ': {count: 10}, '玉子焼き': {count: 1}},
                    {'唐揚げ': {count:  8}},
                    {'唐揚げ': {count:  6}}];

function eatWithFinger(foodName, lunchBoxes) {
  const canEatIndex = R.apply(R.reduce(R.maxBy(([lunchBox, i]) => lunchBox[foodName].count)), R.juxt([R.head, R.tail])(R.addIndex(R.map)(R.constructor(Array), lunchBoxes)))[1];

  return R.assocPath([canEatIndex, foodName, 'count'], lunchBoxes[canEatIndex][foodName].count - 1, lunchBoxes);
}

export default function main() {
  const eatKaraageWithFingerFiveTimes = R.apply(R.pipe)(R.repeat(R.curry(eatWithFinger)('唐揚げ'), 5));

  return eatKaraageWithFingerFiveTimes(lunchBoxes);
}
