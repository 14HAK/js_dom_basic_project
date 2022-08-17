// ........................1st time.......................................

// const diposit_btn = document.getElementById('deposit_btn');
// const Withdraw_btn = document.getElementById('Withdraw_btn')

// const deposit_input = document.getElementById('deposit_input');
// const deposit_history = document.getElementById('deposit_history');

// const Withdraw_input = document.getElementById('Withdraw_input')
// const Withdraw_history = document.getElementById('Withdraw_history')

// const balance_history = document.getElementById('balance_history');


// diposit_btn.addEventListener('click', () => {

//   const dvalue = parseFloat(deposit_input.value) ? parseFloat(deposit_input.value) : parseFloat('0');

//   const dh = parseFloat(deposit_history.innerText);
//   const sum = dvalue + dh;

//   const bh = parseFloat(balance_history.innerText);
//   const sum2 = dvalue + bh;

//   deposit_history.innerText = `${sum}`;
//   balance_history.innerText = `${sum2}`;

//   deposit_input.value = '';

// });

// Withdraw_btn.addEventListener('click', () => {
//   const wvalue = parseFloat(Withdraw_input.value) ? parseFloat(Withdraw_input.value) : parseFloat('0');

//   const wh = parseFloat(Withdraw_history.innerText);
//   const bh = parseFloat(balance_history.innerText);

//   if (wvalue <= bh) {
//     const sum = wvalue + wh;
//     Withdraw_history.innerText = `${sum}`;

//     const sum2 = (bh - wvalue) <= 0 ? parseFloat('0') : bh - wvalue;
//     balance_history.innerText = `${sum2}`;
//   } else {
//     const sum = wh;
//     Withdraw_history.innerText = `${sum}`;

//     const sum2 = bh <= 0 ? parseFloat('0') : bh;
//     balance_history.innerText = `${sum2}`;
//   }

//   Withdraw_input.value = '';
// })

// ..............................2nd time.................................

// const diposit_btn = document.getElementById('deposit_btn')
// const Withdraw_btn = document.getElementById('Withdraw_btn')


// const deposit_input = document.getElementById('deposit_input');
// const Withdraw_input = document.getElementById('Withdraw_input');


// const deposit_history = document.getElementById('deposit_history');
// const Withdraw_history = document.getElementById('Withdraw_history');
// const balance_history = document.getElementById('balance_history')


// diposit_btn.addEventListener('click', () => {

//   const d_value = parseFloat(deposit_input.value) && (parseFloat(deposit_input.value) > 0) ? parseFloat(deposit_input.value) : parseFloat('0');

//   const d_history = parseFloat(deposit_history.innerText);
//   const deposite_total = d_value + d_history;
//   deposit_history.innerText = `${deposite_total}`;

//   const b_history = parseFloat(balance_history.innerText);
//   const balance_total = d_value + b_history;
//   balance_history.innerText = `${balance_total}`;

//   deposit_input.value = '';

// })


// Withdraw_btn.addEventListener('click', () => {
//   const w_value = parseFloat(Withdraw_input.value) && (parseFloat(Withdraw_input.value) > 0) ? parseFloat(Withdraw_input.value) : parseFloat('0');
//   const w_history = parseFloat(Withdraw_history.innerText);
//   const b_history = parseFloat(balance_history.innerText);

//   if (w_value <= b_history && b_history > 0) {
//     const Withdraw_total = w_value + w_history;
//     Withdraw_history.innerText = `${Withdraw_total}`;

//     const balance_total = b_history - w_value;
//     balance_history.innerText = `${balance_total}`;
//   } else {
//     const Withdraw_total = w_history;
//     Withdraw_history.innerText = `${Withdraw_total}`;

//     const balance_total = b_history;
//     balance_history.innerText = `${balance_total}`;
//   }
//   Withdraw_input.value = '';
// })
// .............................2nd time........................................ 





const deposit_btn = document.getElementById('deposit_btn')
const Withdraw_btn = document.getElementById('Withdraw_btn')

deposit_btn.addEventListener('click', () => {

  const d_value = docInputValue('deposit_input');
  const d_history = docHistorryInnertext('deposit_history');

  const deposite_total = calculatesum(d_value, d_history);
  document.getElementById('deposit_history').innerText = `${deposite_total}`;

  const b_history = docHistorryInnertext('balance_history');
  const balance_total = calculatesum(d_value, b_history);
  console.log(b_history, balance_total);
  document.getElementById('balance_history').innerText = `${balance_total}`;
})


Withdraw_btn.addEventListener('click', () => {
  const w_value = docInputValue('Withdraw_input')
  const w_history = docHistorryInnertext('Withdraw_history');
  const b_history = docHistorryInnertext('balance_history');



  if (w_value <= b_history && b_history > 0) {

    const Withdraw_total = calculatesum(w_value, w_history);
    document.getElementById('Withdraw_history').innerText = `${Withdraw_total}`;

    const balance_total = calculatesub(b_history, w_value);
    document.getElementById('balance_history').innerText = `${balance_total}`;

  } else if (w_value > b_history || b_history < 0) {
    alert('Check Account Validation!')
  } else {
    const Withdraw_total = w_history;
    document.getElementById('Withdraw_history').innerText = `${Withdraw_total}`;

    const balance_total = b_history;
    document.getElementById('balance_history').innerText = `${balance_total}`;
  }

})