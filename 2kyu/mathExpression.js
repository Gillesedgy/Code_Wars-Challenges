

//! Solution(s)
const calc = (exp) => {
    const i1 = (input) => r1(i2(input));
    const r1 = ({s: input, v: a}) =>
      input[0] === '+' || input[0] === '-'
        ? r1({s: i2(input.substr(1)).s, v: input[0] === '+' ? a + i2(input.substr(1)).v : a - i2(input.substr(1)).v})
        : {s: input, v: a};
    const i2 = (input) => r2(i4(input));
    const r2 = ({s: input, v: a}) =>
      input[0] === '*' || input[0] === '/'
        ? r2({s: i4(input.substr(1)).s, v: input[0] === '*' ? a * i4(input.substr(1)).v : a / i4(input.substr(1)).v})
        : {s: input, v: a};
    const i4 = (input) => input[0] === '-' ? {s: e4(input.substr(1)).s, v: -e4(input.substr(1)).v} : e4(input);
    const e4 = (input) =>
      input[0] === '('
        ? (() => {
            const {s, v} = i1(input.substr(1));
            if (s[0] === ')') return {s: s.substr(1), v};
            throw `Unexpected token: Expected ), found ${s[0]}`;
          })()
        : isDigit(input[0])
        ? number(input)
        : (() => {
            throw `Invalid token for e4: ${input[0]}`;
          })();
    const isDigit = (c) => c >= '0' && c <= '9';
    const number = (input) => {
      let li = 0;
      let vi = 0;
      let lf = 0;
      let vf = 0;
      while (isDigit(input[li])) {
        vi = vi * 10 + (input[li] - '0');
        li += 1;
      }
      if (input[li] === '.') {
        lf = 1;
        let m = 0.1;
        while (isDigit(input[li + lf])) {
          vf += m * (input[li + lf] - '0');
          m *= 0.1;
          lf += 1;
        }
      }
      return {s: input.substr(li + lf), v: vi + vf};
    };
    return i1(exp.replace(/ /g, '')).v;
  };

console.log(calc("1+2+3+4")) // 10
console.log(calc("1*2+3*4")); // 14
console.log(calc("2*3-4/2")); // 4

  
  