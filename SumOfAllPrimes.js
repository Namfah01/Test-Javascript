function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= num / 2; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function primesNumber(n) {
  let primes = [];

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

function sumPrimesBelow(n) {
  const primes = primesNumber(n);
  return primes.reduce((sum, prime) => sum + prime, 0);
}

const num = 99;
console.log(sumPrimesBelow(num));
console.log(`Since the prime numbers up to ${num} are ${primesNumber(num)}`);