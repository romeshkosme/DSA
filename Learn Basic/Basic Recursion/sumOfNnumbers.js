let total = 0
const func = (i = 1, n) => {
	if (n < i) return;
  total += i++;
  func(i, n);
}

func(1, 6);
console.log(total)