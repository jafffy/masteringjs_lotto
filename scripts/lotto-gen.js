const LOTTO_PRICE = 1000;

const boughtLottos = [];
let n_lottos = 0;

function buyLottos(amount) {
  n_lottos = amount / LOTTO_PRICE;

  for (let i = 0; i < n_lottos; i++) {
    const lotto = [];

    for (let j = 0; j < 6; j++) {
      lotto.push(Math.floor(Math.random() * 44 + 1));
    }

    boughtLottos.push(lotto);
  }

  console.log(`로또 ${n_lottos}를 발행했습니다.`);

  for (const lotto of boughtLottos) {
    console.log(lotto);
  }
}

function setLuckyNumber(luckyNumbers) {
  if (luckyNumbers.length != 6) {
    console.error('당첨 숫자는 6개여야 합니다!');
    return;
  }

  let n_matches3 = 0;
  let n_matches4 = 0;
  let n_matches5 = 0;
  let n_matches6 = 0;

  for (const lotto of boughtLottos) {
    let n_matches = 0;

    for (const lotto_each_digit of lotto) {
      for (const answer_digit of luckyNumbers) {
        if (answer_digit == lotto_each_digit) {
          n_matches++;
          break;
        }
      }
    }

    if (n_matches == 3) {
      ++n_matches3;
    } else if (n_matches == 4) {
      ++n_matches4;
    } else if (n_matches == 5) {
      ++n_matches5;
    } else if (n_matches == 6) {
      ++n_matches6;
    }
  }

  const benefit_ratio = (5000.0 * n_matches3
                        + 50000.0 * n_matches4
                        + 1500000.0 * n_matches5
                        + 2000000000.0 * n_matches6)
                        / (n_lottos * LOTTO_PRICE) * 100;

  console.log('당첨 통계');
  console.log('---------');
  console.log(`3개 일치 (5000원)- ${n_matches3}개`);
  console.log(`4개 일치 (50000원)- ${n_matches4}개`);
  console.log(`5개 일치 (1500000원)- ${n_matches5}개`);
  console.log(`6개 일치 (2000000000원)- ${n_matches6}개`);
  console.log(`나의 수익률은 ${benefit_ratio.toFixed(2)}%입니다.`);
}

exports.buyLottos = buyLottos;
exports.setLuckyNumber = setLuckyNumber;
