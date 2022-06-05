window.addEventListener('DOMContentLoaded', () => {
	creditsum()
	bids()
	calcMonthlyPayment()
	overPay()
	sum()
})


const costValue = document.getElementById('cost')
const paymentValue = document.getElementById('payment')
const termValue = document.getElementById('term')
const percentValue = document.getElementById('percent')


const creditResult = document.querySelector('.info__position-result')
const monthlyResult = document.querySelector('.info__position-result2')
const overPaymentResult = document.querySelector('.info__position-result3')
const sumResult = document.querySelector('.info__position-result4')

let monlthyPayment
let commonBid

termValue.addEventListener('input', function () {
	bids()
	calcMonthlyPayment()
	overPay()
	sum()
})

costValue.addEventListener('keyup', function () {
	creditsum()
	calcMonthlyPayment()
	overPay()
	sum()
})

paymentValue.addEventListener('keyup', function () {
	const credit = creditsum + ' ₽'
	calcMonthlyPayment()
	overPay()
	sum()
})


percentValue.addEventListener('keyup', function () {
	bids()
	calcMonthlyPayment()
	overPay()
	sum()
})


// FUNCTIONS

function calcMonthlyPayment() {
	monthlyResult.innerHTML = (Math.floor((costValue.value - paymentValue.value) * monlthyPayment * commonBid / (commonBid - 1))).toLocaleString('ru') + ' ₽'
}

function bids() {
	monlthyPayment = percentValue.value / 12 / 100 // ежемесячная ставка
	commonBid = Math.pow((1 + monlthyPayment), termValue.value) // общая ставка
}

function overPay() {
	overPaymentResult.innerHTML = ((Math.floor((costValue.value - paymentValue.value) * monlthyPayment * commonBid / (commonBid - 1))) * termValue.value - (costValue.value - paymentValue.value)).toLocaleString('ru') + ' ₽'
}

function sum() {
	sumResult.innerHTML = (((Math.floor((costValue.value - paymentValue.value) * monlthyPayment * commonBid / (commonBid - 1))) * termValue.value - (costValue.value - paymentValue.value)) + (costValue.value - paymentValue.value)).toLocaleString('ru') + ' ₽'
}

function creditsum() {
	creditResult.innerHTML = (costValue.value - paymentValue.value).toLocaleString('ru') + ' ₽'
}


