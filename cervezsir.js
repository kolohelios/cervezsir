$(function () {
			$(document).tooltip();
			
			$("#color").slider( {
				range: true, min: 0, max: 41, step: 1, values: [2, 5],
				change: function(event, ui) { 
					displayMinAndMaxColors();
					updateTable();
				},
				slide: function(event, ui) {
					displayMinAndMaxColors();
				}
			});
			$("#butogu").slider( {
				range: true, min: 0.1, max: 2.0, values: [0.8, 1.2], step: 0.1,
				change: function(event, ui) {
					displayButoguValues();
					updateTable();
				},
				slide: function(event, ui) {
					displayButoguValues();
				}
			});
			$("#strength").slider( {
				range: true, min: 0.1, max: 12, values: [5, 6], step: 0.1,
				change: function(event, ui) {
					displayStrengthValues();
					updateTable();
				},
				slide: function(event, ui) {
					displayStrengthValues();
				}
			});
			$("#og").slider( {
				range: true, min: 1.001, max: 1.200, values: [1.045, 1.065], step: 0.001,
				change: function(event, ui) {
					displayOGValues();
					updateTable();
				},
				slide: function(event, ui) {
					displayOGValues();
				}
			});
			$("#fg").slider( {
				range: true, min: 0.995, max: 1.056, values: [1.005, 1.015], step: 0.001,
				change: function(event, ui) {
					displayFGValues();
					updateTable();
				},
				slide: function(event, ui) {
					displayFGValues();
				}
			});
				
			$(this).on("click", ":checkbox", function() {
      			if ($(this).closest("checkbox").prop("checked")) {
      				$(this).closest("checkbox").attr("checked", false);
      			}
      			else {
      				$(this).closest("checkbox").attr("checked", true);
      			}
      			updateTable();				
			});			
			for (var i = 0; i < 5; i++) {
	$("#matching-styles").find("table").append("<tr><td>&nbsp</td><td>&nbsp</td></tr>");
			}
			for (var i = 0; i < 5; i++) {
	$("#matching-styles2").find("table").append("<tr><td>&nbsp</td><td>&nbsp</td></tr>");
			}
			
});

$(document).ready(function() {
	displayMinAndMaxColors();
	displayButoguValues();
	displayStrengthValues();
	displayOGValues();
	displayFGValues();
});

function colorToDisplay(srmValue) {
	var returnValue = "#FFFFFF";
	var colorMap = [{"srm": 2, "color": "#FFFFF0"}, {"srm": 3, "color": "#FFFF99"}, {"srm": 5, "color": "#FFCC66"}, {"srm": 6, "color": "#FFCC00"}, {"srm": 8, "color": "#CC9900"},{"srm": 9, "color": "#FF9933"}, {"srm": 14, "color": "#CC6600"},{"srm": 18, "color": "#993300"}, {"srm": 23, "color": "#771100"},{"srm": 28, "color": "#551D00"}, {"srm": 35, "color": "#331100"}, {"srm": 45, "color": "#0F0500"}];
	colorMap.forEach(function(colorFromHash) {
		if (srmValue >= colorFromHash.srm) {
			returnValue = colorFromHash.color;
		}
	});
	return returnValue;
}

function displayMinAndMaxColors() {
	var colorArray = $("#color").slider("option", "values");
	[0, 1].forEach(function(which) {
		if (colorArray[which] > 13) { var textColor = "#FFFFFF"; }
		else { var textColor = "#000000"; }
		$("#color-text").find("span").eq(which).text(colorArray[which]).css({"color": textColor, "background-color": colorToDisplay(colorArray[which])});
	});
	var avgColor = (colorArray[0] + colorArray[1]) / 2;
	$("#glass").css({"background-color": colorToDisplay(avgColor)});
}

function displayButoguValues() {
	var butoguArray = $("#butogu").slider("option", "values");	
	[0, 1].forEach(function(which) {
		$("#butogu-text").find("span").eq(which).text(butoguArray[which]);
	});
}

function displayStrengthValues() {
	var strengthArray = $("#strength").slider("option", "values");	
	[0, 1].forEach(function(which) {
		$("#strength-text").find("span").eq(which).text(strengthArray[which]);
	});
}

function displayOGValues() {
	var ogArray = $("#og").slider("option", "values");	
	[0, 1].forEach(function(which) {
		$("#og-text").find("span").eq(which).text(ogArray[which]);
	});
}

function displayFGValues() {
	var fgArray = $("#fg").slider("option", "values");	
	[0, 1].forEach(function(which) {
		$("#fg-text").find("span").eq(which).text(fgArray[which]);
	});
}

function updateTable() {
	$("#matching-styles").find("table").find("tr").nextAll().remove();
	$("#matching-styles2").find("table").find("tr").nextAll().remove();
	tablePopulator(beerStyle());
}

function beerStyle() {
	var beers = 
	[{"styleNum": "1A", "styleName": "Lite American Lager", "ibus": [8, 12], "srm": [2, 3], "og": [1.028, 1.040], "fg": [0.998, 1.008], "abv": [2.8, 4.2], "nationality": "Am"},
	{"styleNum": "1B", "styleName": "Standard American Lager", "ibus": [8, 15], "srm": [2, 4], "og": [1.040, 1.050], "fg": [1.004, 1.010], "abv": [4.2, 5.3], "nationality": "Am"},
	{"styleNum": "10A", "styleName": "American Pale Ale", "ibus": [30, 45], "srm": [5, 14], "og": [1.045, 1.060], "fg": [1.010, 1.015], "abv": [4.5, 6.2], "nationality": "Am"},
	{"styleNum": "11A", "styleName": "Mild", "ibus": [10, 25], "srm": [12, 25], "og": [1.030, 1.038], "fg": [1.008, 1.013], "abv": [2.8, 4.5], "nationality": "En"}, 
	{"styleNum": "13A", "styleName": "Dry Stout", "ibus": [30, 45], "srm": [25, 40], "og": [1.036, 1.050], "fg": [1.007, 1.011], "abv": [4, 5], "nationality": "Ir"},
	{"styleNum": "14C", "styleName": "Imperial IPA", "ibus": [60, 120], "srm": [8, 15], "og": [1.070, 1.090], "fg": [1.010, 1.020], "abv": [7.5, 10], "nationality": "Am"},
	{"styleNum": "15A", "styleName": "Weizen/Weissbier", "ibus": [8, 15], "srm": [2, 8], "og": [1.044, 1.052], "fg": [1.010, 1.014], "abv": [4.3, 5.6], "nationality": "Ge"}
	];
	
	var colorArray = $("#color").slider("option", "values");
	var butoguArray = $("#butogu").slider("option", "values");
	var strengthArray = $("#strength").slider("option", "values");
	var ogArray = $("#og").slider("option", "values");
	var fgArray = $("#fg").slider("option", "values");
	var nationality = $("#nationality").attr("checked");
	console.log(nationality);
	var colorChecked = ($("#color-checkbox").prop("checked") == true) ? 1 : 0;
	var butoguChecked = ($("#butogu-checkbox").prop("checked") == true) ? 1 : 0;
	var strengthChecked = ($("#strength-checkbox").prop("checked") == true) ? 1 : 0;
	var ogChecked = ($("#og-checkbox").prop("checked") == true) ? 1 : 0;
	var fgChecked = ($("#fg-checkbox").prop("checked") == true) ? 1 : 0;
	var nationalityChecked = ($("#nationality-checkbox").prop("checked") == true) ? 1 : 0;

	var matchingBeerStyles = [];
	var matchesNeeded = colorChecked + butoguChecked + strengthChecked + ogChecked + fgChecked;
	matchesNeeded = (matchesNeeded < 1) ? 1 : matchesNeeded; // S/B no less than 1 or there will be spurious results
	var match;
	
	beers.forEach(function(beer) {
		match = 0;
		if (colorChecked) {
			var rangeMin = beer.srm[0];
			var rangeMax = beer.srm[1];
			if ((colorArray[0] <= rangeMax) && (colorArray[1] >= rangeMin)) {
				match++;
			}
		}
		if (butoguChecked) {
			var rangeMin = beer.ibus[0] / ((beer.og[1] - 1) * 1000);
			var rangeMax = beer.ibus[1] / ((beer.og[0] - 1) * 1000);
			if ((butoguArray[0] <= rangeMax) && (butoguArray[1] >= rangeMin)) {
				match++;
			}	
		}
		if (strengthChecked) {
			var rangeMin = beer.abv[0];
			var rangeMax = beer.abv[1];
			if ((strengthArray[0] <= rangeMax) && (strengthArray[1] >= rangeMin)) {
				match++;
			}	
		}
		if (ogChecked) {
			var rangeMin = beer.og[0];
			var rangeMax = beer.og[1];
			if ((ogArray[0] <= rangeMax) && (ogArray[1] >= rangeMin)) {
				match++;
			}	
		}
		if (fgChecked) {
			var rangeMin = beer.fg[0];
			var rangeMax = beer.fg[1];
			if ((fgArray[0] <= rangeMax) && (fgArray[1] >= rangeMin)) {
				match++;
			}	
		}
		if (nationalityChecked) {
			//var arrayOfNationalities = [{"Am": "American"}, {"Be": "Belgian"}, {"En": "English"}, {"Fr": "French"}, {"De": "German"}, {"Ir": "Irish"}];
			var checkedBoxes = $("input[name='nationality']:checked");
			checkedBoxes.forEach(function(element) {
				console.log(element.attr());
			});
	
			

				//if (beer.nationality == element.na) {
					//match++
				//}
			
		}
		if (match == matchesNeeded) {
			var madeObject = {"styleNum": beer.styleNum, "styleName": beer.styleName};
			matchingBeerStyles.push(madeObject);
		}
	});
	return matchingBeerStyles;
}

function tablePopulator(beerResults) {
	var counter = 0;
	var matches = beerResults.length;
	var table1 = $("#matching-styles").find("table");
	var table2 = $("#matching-styles2").find("table");	
	
	// because this for loop is doing so much heavy lifting with the counter, forEach just didn't fit the bill
	for (var counter = 0; counter < 9; counter++) {
		if (counter < matches) {
			var appendString = "<tr><td>" +beerResults[counter].styleNum+ "</td><td>" +beerResults[counter].styleName+ "</td></tr>";
		}
		else {
			var appendString = "<tr><td>&nbsp</td><td>&nbsp</td></tr>";
		}
		if (counter < 5) {
			if ((counter == 4) && (matches > 4)) {
				table2.append(appendString);
				table1.append("<tr><td colspan='2'>More results...</td></tr>");
			}
			else {
				table1.append(appendString);
			}
		}
		else if (counter > 4) {
			table2.append(appendString);
		}
	}
}