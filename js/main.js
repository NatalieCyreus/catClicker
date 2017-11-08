var kittieName = '<h1>Kittie</h1>';
$('#kittieName').append(kittieName);
var kittieCount = 0;
$('#kittieImage').click(function(e) {
  kittieCount += 1;
  $( "#clicks" ).empty();
  $('#clicks').append(kittieCount);
});

var kittieName2 = '<h1>Kittie2</h1>';
$('#kittieName2').append(kittieName2);
var kittieCount2 = 0;
$('#kittieImage2').click(function(e) {
  kittieCount2 += 1;
  $( "#clicks2" ).empty();
  $('#clicks2').append(kittieCount2);
});
