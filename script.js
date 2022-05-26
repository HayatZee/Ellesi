
//------------- CHANGING SET OF PRODUCTS ONCLICK PRODUCTS MENU----//

$(document).ready(function(){
  $("#bestSelling-section").hide();
  $("#onSale-section").hide();
  $("#trend-section").hide();
  $("#topRated-section").hide();

});

$("#featured").click(function(){
  $("#bestSelling-section").hide();
  $("#onSale-section").hide();
  $("#trend-section").hide();
  $("#topRated-section").hide();
  $("#featured-section").show();

});
$("#bestSelling").click(function(){
  $("#featured-section").hide();
  $("#onSale-section").hide();
  $("#trend-section").hide();
  $("#topRated-section").hide();
  $("#bestSelling-section").show();

});

$("#onSale").click(function(){
  $("#featured-section").hide();
  $("#bestSelling-section").hide();
  $("#trend-section").hide();
  $("#topRated-section").hide();
  $("#onSale-section").show();
});

$("#trend").click(function(){
  $("#featured-section").hide();
  $("#bestSelling-section").hide();
  $("#onSale-section").hide();
  $("#topRated-section").hide();
  $("#trend-section").show();
});

$("#topRated").click(function(){
  $("#featured-section").hide();
  $("#bestSelling-section").hide();
  $("#onSale-section").hide();
  $("#trend-section").hide();
  $("#topRated-section").show();
});
