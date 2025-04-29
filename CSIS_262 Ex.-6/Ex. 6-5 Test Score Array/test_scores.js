var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

var addScore = function() {
	var userName = $("name").value;
	var userScore = parseInt($("score").value);
	if (userName == "" || isNaN(userScore) || userScore < 0 || userScore > 100 ) {
		alert("You must enter a name and a valid score")
		$("name").focus();
	} else {
		names.push(userName);
		scores.push(userScore);
		$("name").value = "";
		$("score").value = "";
		$("name").focus();
	}
};

var displayResults = function() {
	var avrgScore = 0;
	var highScore = scores[0];
	var index = 0;
	for (let i = 0; i < scores.length; i++) {
		avrgScore += scores[i];
	}

	avrgScore = parseInt(avrgScore / scores.length);
	for (let j = 1; j < scores.length; j++) {
		if (scores[j] > highScore) {
			highScore = scores[j];
			index = j;
		};
	}
	var msg = ("Results");
	var msg1 = ("Average score = " + avrgScore);
	var msg2 = ("High score = " + names[index] + " with a score of " + highScore);
	var h2Element = document.createElement('h2');
	h2Element.id = "h2Element";
	var pElement1 = document.createElement('p');
	pElement1.id = "pElement1";
	var pElement2 = document.createElement('p');
	pElement2.id = "pElement2";
	h2Element.textContent = msg;
	pElement1.textContent = msg1;
	pElement2.textContent = msg2;
	var divElement = document.getElementById("results");

	if ($("h2Element")) {
	
		$("h2Element").replaceWith(h2Element);
	} else {
		divElement.before(h2Element);
	}

	if ($("pElement2")) {
		$("pElement2").replaceWith(pElement2);
	} else {
		divElement.after(pElement2);
	}

	if ($("pElement1")) {
		$("pElement1").replaceWith(pElement1);
	} else {
		divElement.after(pElement1);
	}

	divElement.before(h2Element);
	divElement.after(pElement2);
	divElement.after(pElement1);

};

var displayScores = function() {
	var table = document.getElementById("scores_table");
	let newArray = ["Name", "Score"];
	var h2Element2 = document.createElement("h2");
	h2Element2.id = "h2Element2";
	h2Element2.textContent = "Scores"
	var head1 = document.createElement("tr");
	head1.id = "head1"
	var head2 = document.createElement("th");
	head2.id = "head2";
	var head3 = document.createElement("th");
	head3.id = "head3";
	head2.textContent = newArray[0];
	head3.textContent = newArray[1];

	if ($("h2Element2")) {
		$("h2Element2").replaceWith(h2Element2);
	} else {
		table.before(h2Element2);
	} if ($("head1")) {
		$("head1").replaceWith(head1);
	} else {
		table.appendChild(head1);
	} if ($("head2")) {
		$("head2").replaceWith(head2);
	} else {
		head1.appendChild(head2);
	} if ($("head3")) {
		$("head3").replaceWith(head3);
	} else {
		head1.appendChild(head3);
	}	

	for (let h = 0; h < names.length; h++) {
		var row = document.createElement("tr");
		row.id = h;
		for (let y = 0; y < newArray.length; y++) {
		var cell1 = document.createElement("td");
		cell1.textContent = (names[h]);
		var cell2 = document.createElement("td");
		cell2.textContent = (scores[h]);
		}

		if ($(h)) {
			$(h).remove();
			row.appendChild(cell1);
			row.appendChild(cell2);
			table.appendChild(row);
		} else {
			row.appendChild(cell1);
			row.appendChild(cell2);
			table.appendChild(row);
		}

	}
};

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("name").focus();
};


