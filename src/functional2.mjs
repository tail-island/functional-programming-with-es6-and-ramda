import R                        from 'ramda';
import {adjustPath, maxIndexBy} from './utility';

const lunchBoxes = [{'唐揚げ': {count: 10}, '玉子焼き': {count: 1}},
                    {'唐揚げ': {count:  8}},
                    {'唐揚げ': {count:  6}}];

const canEatIndex = (foodName, lunchBoxes) => maxIndexBy(R.path([foodName, 'count']), lunchBoxes);
const eatWithFinger = (foodName, lunchBoxes) => adjustPath([canEatIndex(foodName, lunchBoxes), foodName, 'count'], R.dec, lunchBoxes);

export default function main() {
  const eatKaraageWithFingerFiveTimes = R.apply(R.pipe)(R.repeat(R.curry(eatWithFinger)('唐揚げ'), 5));

  return eatKaraageWithFingerFiveTimes(lunchBoxes);
}
