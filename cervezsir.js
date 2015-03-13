$(function () {
			$("#color").slider( {
				range: true,
				min: 1,
				max: 44,
				values: [1, 44],
				step: 1,
				change: function(event, ui) {
					displayMinAndMaxColors(ui.values);
					}
			});
});

function displayMinAndMaxColors(colorArray)
{
	$("#min-color").text(colorArray[0]);
	$("#max-color").text(colorArray[1]);
	$("#min-color").css({"background-color": colorToDisplay(colorArray[0])});
	$("#max-color").css({"background-color": colorToDisplay(colorArray[1])});
	var avgColor = (colorArray[0] + colorArray[1]) / 2;
	$("#glass").css({"background-color": colorToDisplay(avgColor)});
}

function colorToDisplay(srmValue)
{
	var bgcolor = "#FFFFFF";
	switch (true)
	{
		case (srmValue < 2):
			color = "#FFFFF0";
			break;
		case (srmValue < 3):
			color = "#FFFF99";
			break;
		case (srmValue < 5):
			color = "#FFCC66";
			break;
		case (srmValue < 6):
			color = "#FFCC00";
			break;
		case (srmValue < 8):
			color = "#CC9900";
			break;
		case (srmValue < 9):
			color = "#FF9933";
			break;
		case (srmValue < 14):
			color = "#CC6600";
			break;
		case (srmValue < 18):
			color = "#993300";
			break;
		case (srmValue < 23):
			color = "#7A2900";
			break;
		case (srmValue < 28):
			color = "#551D00";
			break;
		case (srmValue < 35):
			color = "#331100";
			break;
		case (srmValue < 45):
			color = "#0F0500";
			break;
		default: // fall right out - we already have a default declared at initialization
			break;
	}
	return color;
}