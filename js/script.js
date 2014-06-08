 // 0. get the id from where I clicked

 $( document ).ready(function() {
	$('.side-nav li').click(function(event) {
	 
		mood = event.target.parentElement.id;

		 // 1. clear all "active" class from all moods

		 $("#moods li").removeClass("active");

		 // 2. make the mood I clicked on get the "active" class

		 var moodWithHashtag = "#" + mood;

		 $(moodWithHashtag).addClass("active");

		 collectionOfsongsOfCurrentMood = songRepo[mood]

		 var randomvid = Math.floor(Math.random()*collectionOfsongsOfCurrentMood.length)

		var videoID = songRepo[mood][randomvid]["youTubeID"];

		var videoURL = "//www.youtube.com/embed/" + videoID;

		$("#currentVideo").attr("src", videoURL);

		var vidTitle = songRepo[mood][randomvid]["name"];

		$('#videoTitle').text(vidTitle);

		$('.reloadVid').removeClass('hideVid');

		$('.reloadVid').addClass('showVid');



		
	})

	$('.reloadVid').click(function(event) {
		console.log(mood);

		$("#" + mood).children()[0].click();




	}


		)
});



var songRepo = {

	"happy" : [

		{
			"name": "The Fratellis",
			"youTubeID": "sEXHeTcxQy4?autoplay=1",
		},

		{"name": "Pharrell",
			"youTubeID": "y6Sxv-sUYtM?autoplay=1",},


		{"name": "Bombay Bycycle Club",
			"youTubeID": "oDuif301F-8?autoplay=1",},
	],
	

	"sad" : [

		{
			"name": "Evanescence",
			"youTubeID": "5anLPw0Efmo?autoplay=1",
		},

		{"name": "Adele",
			"youTubeID": "hLQl3WQQoQ0?autoplay=1",},


		{"name": "Sarah McLachlan",
			"youTubeID": "1GmxMTwUgs?autoplay=1",},
	],

	"breakstuff" : [

		{
			"name": "Limp Bizkit",
			"youTubeID": "ZpUYjpKg9KY?autoplay=1",
		},

		{"name": "Hatebreed",
			"youTubeID": "yd972J6f4IY?autoplay=1",},


		{"name": "50 Cent",
			"youTubeID": "oHPtHSItIBc?autoplay=1",},
	],

	"sexy" : [

		{
			"name": "Sexyback",
			"youTubeID": "3gOHvDP_vCs?autoplay=1",
		},

		{"name": "Britney",
			"youTubeID": "Mzybwwf2HoQ?autoplay=1",},


		{"name": "Janet Jackson",
			"youTubeID": "hn81K1Fm03Y?t=50s?autoplay=1",},
	]


}