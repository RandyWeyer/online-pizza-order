// Business Logic
function Pizza(diameter, crust, sauce, toppings) {
  this.diameter = diameter;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
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




    orderedPizza = new Pizza(pizzaDiameter, pizzaCrust,pizzaSauce,pizzaToppings);

    console.log(orderedPizza);


  });

  $("#order-dessert-pizza").submit(function(event) {
    event.preventDefault();

  });


});
