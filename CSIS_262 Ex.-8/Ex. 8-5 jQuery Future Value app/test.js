$(document).ready(function() {
    var investment = parseFloat($("#investment").val());
    var annualRate = parseFloat($("#rate").val());
    var years = parseFloat($("#years").val());

    $('#calculate').click(function() {
        futureValue = investment;
		for ( i = 1; i <= years; i++ ) {
			futureValue += futureValue * annualRate / 100;
		}
		$("#future_value").textC() = futureValue.toFixed();

    })

})