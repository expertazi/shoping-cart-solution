function updateProductNumber(product, price, isIncreasing) {
  const caseInput = document.getElementById(product + "-number");
  let productNumber = caseInput.value;
  if (isIncreasing) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  caseInput.value = productNumber;
  //   Update Product Total
  let productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;

  //   calculate Total
  calculateTotal();
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const toalPrice = subTotal + tax;

  //   Update On the Html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = toalPrice;
}

// Handle Phone Increase Decrease Event
document.getElementById("phone-plus").addEventListener("click", function () {
  //   console.log("case-plus Clied");
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  //   console.log("case-plus Clied");
  updateProductNumber("phone", 1219, false);
});

// Handle case Increase Decrease Event

document.getElementById("case-plus").addEventListener("click", function () {
  //   console.log("case-plus Clied");
  updateProductNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  //   const caseInput = document.getElementById("case-number");
  //   const productNumber = caseMinus.value;
  //   caseInput.value = parseInt(productNumber) - 1;

  updateProductNumber("case", 59, false);
});

// This is for pHONE
