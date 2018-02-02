const lunchBoxes = [{'唐揚げ': {count: 10}, '玉子焼き': {count: 1}},
                    {'唐揚げ': {count:  8}},
                    {'唐揚げ': {count:  6}}];

function eatWithFinger(foodName) {
  let canEatIndex = 0;
  for (let i = 1; i < lunchBoxes.length; ++i) {
    canEatIndex = lunchBoxes[i][foodName].count > lunchBoxes[canEatIndex][foodName].count ? i : canEatIndex;
  }

  lunchBoxes[canEatIndex][foodName].count--;
}

export default function main() {
  for (let i = 0; i < 5; ++i) {
    eatWithFinger('唐揚げ');
  }

  return lunchBoxes;
}
