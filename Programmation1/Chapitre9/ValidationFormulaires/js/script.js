/*
* Rafael De Mendonça 2020-03-15
*
*
$(".custom-select").hide();

var $radios = $('input[name="exampleRadios1"]');
$radios.change(function() {
    var radioValue = $("input[name='exampleRadios1']:checked").val();

});
*/
$("#listeDC" ).click(function() {
    $( "#batman option:selected" ).attr("src","batman.png");
});