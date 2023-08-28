function FixSize(selector){

	setTimeout(function(){
		var divWidth = $(selector + ":visible").width();
		var fontSize = 92;

		// Reset font to default size to start.
		$(selector).css("font-size", "");

		var text_org = $(selector + ":visible").html();
		var text_update = '<span style="white-space:nowrap;">' + text_org + '</span>';
		$(selector + ":visible").html(text_update);


		var childWidth = $(selector + ":visible").children().width();

		// console.log(childWidth + " " + divWidth);

		while ($(selector + ":visible").children().width() > divWidth){
			// console.log($(selector + ":visible").children().width() + " " + divWidth);
			$(selector).css("font-size", fontSize -= 1);
		}

		// position pronouns and icons
		$('.player1-pronouns').css("left", $(".player1-tag" + " span").width() + 20);
		$('.player1-icon').css("left", $(".player1-tag" + " span").width() + 55 + 45);

		$('.player2-pronouns').css("left", 1385 - 470 - $(".player2-tag" + " span").width() - 55 - 33);
		$('.player2-icon').css("left", 1385 - 470 - $(".player2-tag" + " span").width() - 55 - 72);

		$('.com1-pronouns').css("left", $(".com1-tag" + " span").width() + 20);
		$('.com2-pronouns').css("left", $(".com2-tag" + " span").width() + 20);
		
		// redistribute player div widths
		$('.player1').css('width', $(".player1-tag" + " span").width() + 40 + 55)
		$('.player2').css('width', $(".player2-tag" + " span").width() + 40 + 55)

		$('.com1-board').css('width', $(".com1-tag" + " span").width() + 40 + 55 + 77)
		$('.com2-board').css('width', $(".com2-tag" + " span").width() + 40 + 55 + 77)

		// reposition tag based on height
		if ((($(".player1-tag").height() - $(".player1-tag" + " span").height()) > 0)) {
			$(".player1-tag").css("top", ($(".player1-tag").height() - $(".player1-tag" + " span").height()) / 2)
		} else {
			$(".player1-tag").css("top", 0);
		}
		
		if ((($(".player2-tag").height() - $(".player2-tag" + " span").height()) > 0)) {
			$(".player2-tag").css("top", ($(".player2-tag").height() - $(".player2-tag" + " span").height()) / 2)
		} else {
			$(".player2-tag").css("top", 0);
		}

		if ((($(".com1-tag").height() - $(".com1-tag" + " span").height()) > 0)) {
			$(".com1-tag").css("top", ($(".com1-tag").height() - $(".com1-tag" + " span").height()) / 2)
		} else {
			$(".com1-tag").css("top", 0);
		}
		
		if ((($(".com2-tag").height() - $(".com2-tag" + " span").height()) > 0)) {
			$(".com2-tag").css("top", ($(".com2-tag").height() - $(".com2-tag" + " span").height()) / 2)
		} else {
			$(".com2-tag").css("top", 0);
		}
		// bracket container width
		if ((($(".bracket-location").height() - $(".bracket-location" + " span").height()) > 0)) {
			$(".bracket-location").css("top") += ($(".bracket-location").height() - $(".bracket-location" + " span").height()) / 2;
		}

		$(".bracket-container").css("width", 121 + 20 + $(".bracket-location" + " span").width())
		// console.log(fontSize)
	}, 500);
}

$(() => {
	loadSmashControl();

	function loadSmashControl(){
		const bundle = 'nodecg-smashcontrol';
		var bracketlocation = $('.bracket-location');
		var player1name = $('.player1-tag');
		var player1pronouns = $('.player1-pronouns');
		var player1port = $('.player1-port');
		var p1score = $('.player1-score');
		var player2name = $('.player2-tag');
		var player2pronouns = $('.player2-pronouns');
		var player2port = $('.player2-port');
		var p2score = $('.player2-score');
		var commentary1 = $('.com1-tag');
		var commentary1pronouns = $('.com1-pronouns');
		var commentary2 = $('.com2-tag');
		var commentary2pronouns = $('.com2-pronouns');
		var gamedisplay = $('.game-display');
		var player1char = $('.player1-icon');
		var player2char = $('.player2-icon');


		var player1score = nodecg.Replicant("player1Score", bundle);
		var player2score = nodecg.Replicant("player2Score", bundle);
		var setInfo = nodecg.Replicant("playerDataArray", bundle);
		setInfo.on('change', (newVal, oldVal) => {
			if (newVal)
				updateFields(newVal);
		});
		player1score.on('change', (newVal, oldVal) => {
			if (newVal)
				updateFields(newVal);
		});
		player2score.on('change', (newVal, oldVal) => {
			if (newVal)
				updateFields(newVal);
		});
		function updateFields(setData){
			bracketlocation.text(setData.bracketlocation);
			player1name.text(setData.player1tag);
			player1pronouns.text(setData.player1pronouns);
			player2name.text(setData.player2tag);
			player2pronouns.text(setData.player2pronouns);
			commentary1.text(setData.commentator1);
			commentary1pronouns.text(setData.commentator1pronouns);
			commentary2.text(setData.commentator2);
			commentary2pronouns.text(setData.commentator2pronouns);

			
				var linkToRender = "../../nodecg-smashcontrol/dashboard/images/ssbult/";
				player1char.children().attr("src", (linkToRender + setData.player1character + ".png"));
				player2char.children().attr("src", (linkToRender + setData.player2character + ".png"));
				

			NodeCG.waitForReplicants(player1score, player2score).then(() => {
				p1score.text(player1score.value);
				p2score.text(player2score.value);
			});

			gamedisplay.text("Game " + (parseInt(player1score.value) + parseInt(player2score.value) + 1));

			if ($(':root').css("--char-icons") === "inline") {
				$('.player1-tag').css("width", "250");
				$('.player2-tag').css("width", "250");
			} else {
				$('.player1-tag').css("width", "300");
				$('.player2-tag').css("width", "300");
			}

			toFix = ['.player1-tag', '.player2-tag', '.player1-pronouns', '.player2-pronouns', '.com1-tag', '.com2-tag', '.com1-pronouns', '.com2-pronouns', '.bracket-location', '.player1-score', '.player2-score']
			toFix.map(FixSize);

			if (commentary1.text() === "") {
				// $(root).css("--com1-vis", inline);
				document.documentElement.style.setProperty('--com1-vis', 'none');
				document.documentElement.style.setProperty('--com2-order', '1');
				document.documentElement.style.setProperty('--icon-order', '0');
				document.documentElement.style.setProperty('--com2-flex', 'row');
			} else {
				document.documentElement.style.setProperty('--com1-vis', 'inline');
				document.documentElement.style.setProperty('--com2-order', '3');
				document.documentElement.style.setProperty('--icon-order', '2');
				document.documentElement.style.setProperty('--com2-flex', 'row-reverse');
			}
			if (commentary2.text() === "") {
				// $(root).css("--com1-vis", inline);
				document.documentElement.style.setProperty('--com2-vis', 'none');
				document.documentElement.style.setProperty('--icon-order', '0');
			} else {
				document.documentElement.style.setProperty('--com2-vis', 'inline');
				document.documentElement.style.setProperty('--icon-order', '2');
			}
		}
	}
})
