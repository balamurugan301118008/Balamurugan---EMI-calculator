const loanamount = document.querySelector(".Principle")

const interest = document.querySelector(".Interest")

const TenurePayment = document.querySelector(".Tenure")

const calculate = document.querySelector(".Calculate")

const MonthlyPaying = document.querySelector(".monthly-payment")

const InterestPayabal = document.querySelector(".monthly-interest")

const TotalPayment = document.querySelector(".total-payment")

const options = document.querySelector(".options")

const totalResult = document.querySelector(".totalresult")

calculate.addEventListener("click", (e) => {
    e.preventDefault()
    totalResult.style.display = "block"
    if (loanamount.value !== "" && interest.value !== "" && TenurePayment.value !== "" && options.value == "years") {
        if (interest.value > 0 && interest.value <20) {
            let YearConverter = TenurePayment.value * 12

            let rateOfInt = interest.value / 1200

            let Numarator = (loanamount.value * rateOfInt) * (1 + rateOfInt) ** (YearConverter)

            let Demnaminator = (1 + rateOfInt) ** (YearConverter) - 1

            let result = Number(Numarator / Demnaminator)
            MonthlyPaying.innerText = Math.round(result).toLocaleString()

            let outputOne = result * YearConverter - loanamount.value
            InterestPayabal.innerText = Math.round(outputOne).toLocaleString()

            let totalamount = Number(loanamount.value) + Number(outputOne)
            TotalPayment.innerText = Math.round(totalamount).toLocaleString()

        }
        else {
            alert("Please enter interest amount is 1 to 20")
            totalResult.style.display = "none"
        }
    }
    else if (loanamount.value !== "" && interest.value !== "" && TenurePayment.value !== "" && options.value == "months") {
        if (interest.value > 0 && interest.value <=20) {
            let rateOfInt = interest.value / 1200

            let Numarator = loanamount.value * rateOfInt * (1 + rateOfInt) ** (TenurePayment.value)

            let Demnaminator = ((1 + rateOfInt) ** TenurePayment.value) - 1

            let result = (Numarator / Demnaminator)
            MonthlyPaying.innerText = Math.round(result).toLocaleString()

            let output = result * (TenurePayment.value) - (loanamount.value)
            InterestPayabal.innerText = Math.round(output).toLocaleString()

            let totalAmount = Number(loanamount.value) + Number(output)
            TotalPayment.innerText = Math.round(totalAmount).toLocaleString()

        }
        else {
            alert("Please enter interest amount is 1 to 20")
            totalResult.style.display = "none"
        }
    }
    else {
        alert("Please enter value in this inputs")
        totalResult.style.display = "none"
    }
    

})
