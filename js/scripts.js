// Business Logic
function Pizza(diameter, crust, sauce, toppings) {
  this.diameter = diameter;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
}

Pizza.prototype.getPizzaPrice = function(orderedPizza) {
  var pizzaPrice = 0;
  var crustSaucePrice = ((Math.PI * ((this.diameter/2)*(this.diameter/2)))/10) //Area of circle divided by 10

  // Crust modifiers
  if (this.crust.includes("cheese-stuffed")){crustSaucePrice*=1.3}
  if (this.crust.includes("chicago-deep-dish")){crustSaucePrice*=1.5}

  // Sauce modifiers
  if (this.sauce.includes("alfredo")){crustSaucePrice*=1.2}
  if (this.sauce.includes("nutella")){crustSaucePrice*=1.1}
  if (this.sauce.includes("strawberry-sauce")){crustSaucePrice*=1.15}
  if (this.sauce.includes("cherry-sauce")){crustSaucePrice*=1.2}

  // Toppings modifiers
  var toppingsTotal = this.toppings.length * .25;
  if (this.toppings.includes("pepperoni")){toppingsTotal+=.75}
  if (this.toppings.includes("sausage")){toppingsTotal+=.75}
  if (this.toppings.includes("chicken")){toppingsTotal+=.75}
  if (this.toppings.includes("pork")){toppingsTotal+=1}
  if (this.toppings.includes("ham")){toppingsTotal+=1}
  if (this.toppings.includes("bacon")){toppingsTotal+=1.75}
  if (this.toppings.includes("pancetta")){toppingsTotal+=1.25}
  if (this.toppings.includes("chorizo")){toppingsTotal+=1.75}

  if (this.toppings.includes("sun-dried-tomatoes")){toppingsTotal+=.25}
  if (this.toppings.includes("pineapple")){toppingsTotal+=.5}
  if (this.toppings.includes("asparagus")){toppingsTotal+=.75}

  if (this.toppings.includes("peaches")){toppingsTotal+=.25}
  if (this.toppings.includes("kiwi")){toppingsTotal+=.75}

  var pizzaPrice = crustSaucePrice + toppingsTotal;
  var pizzaPriceCurrency = pizzaPrice.toFixed(2);

  return pizzaPriceCurrency;
}

function changePizzaType() {
  $(".savory-pizza").toggle();
  $(".sweet-pizza").toggle();
}

function salesTax(totalBeforeTax) {
  totalAfterTax = totalBeforeTax * 1.065;
  totalAfterTaxCurrency = totalAfterTax.toFixed(2);
  return totalAfterTaxCurrency;
}
function showTotal() {
  $(".savory-pizza").hide();
  $(".sweet-pizza").hide();
  $(".results").show();
}

// Front End Logic
$(document).ready(function(){

  $("#order-pizza").submit(function(event) {
    event.preventDefault();

    var pizzaDiameter = document.getElementById("pizza-diameter").value;
    var pizzaCrust = document.getElementById("pizza-crust").value;
    var pizzaSauce = document.getElementById("pizza-sauce").value;



    var form = document.getElementById("order-pizza"),
        inputs = form.getElementsByTagName("input"),
        pizzaToppings = [];

    for (var i = 0, max = inputs.length; i < max; i++) {
       if (inputs[i].type === "checkbox" && inputs[i].checked) {
         if (pizzaToppings.length < 7)
          pizzaToppings.push(inputs[i].id);
       }
    }
    orderedPizza = new Pizza(pizzaDiameter, pizzaCrust, pizzaSauce, pizzaToppings);

    var TotalBeforeTax = orderedPizza.getPizzaPrice();

    var TotalAfterTax = salesTax(TotalBeforeTax);

    $(".total-before-tax").text(TotalBeforeTax);
    $(".total-after-tax").text(TotalAfterTax);

    showTotal();

  });

  $("#order-dessert-pizza").submit(function(event) {
    event.preventDefault();

    var pizzaDiameter = document.getElementById("pizza-diameter-sweet").value;
    var pizzaCrust = document.getElementById("pizza-crust-sweet").value;
    var pizzaSauce = document.getElementById("pizza-sauce-sweet").value;



    var form = document.getElementById("order-dessert-pizza"),
        inputs = form.getElementsByTagName("input"),
        pizzaToppings = [];

    for (var i = 0, max = inputs.length; i < max; i++) {
       if (inputs[i].type === "checkbox" && inputs[i].checked) {
         if (pizzaToppings.length < 7)
          pizzaToppings.push(inputs[i].id);
       }
    }

  orderedPizza = new Pizza(pizzaDiameter, pizzaCrust, pizzaSauce, pizzaToppings);

  var TotalBeforeTax = orderedPizza.getPizzaPrice();

  var TotalAfterTax = salesTax(TotalBeforeTax);

  $(".total-before-tax").text(TotalBeforeTax);
  $(".total-after-tax").text(TotalAfterTax);

  showTotal();

  });

  $(".change-pizza-type").click(function(event) {
        event.preventDefault();
        changePizzaType();
  });

});
