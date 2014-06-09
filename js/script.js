 // 0. get the id from where I clicked

 $( document ).ready(function() {
	$('.side-nav li').click(function(event) {

		mood = event.target.parentElement.id;

		 // 1. clear all "active" class from all moods

		 $("#moods li").removeClass("is-active");

		 // 2. make the mood I clicked on get the "active" class

		 // var moodWithHashtag = "#" + mood;
		 var moodWithHashtag = '#' + mood;

		 $(moodWithHashtag).addClass("is-active");

		 // console.log(moodWithHashtag);

		 collectionOfsongsOfCurrentMood = songRepo[mood];

		 // console.log(collectionOfsongsOfCurrentMood);

		 var randomvid = Math.floor(Math.random()*collectionOfsongsOfCurrentMood.length);

		 // console.log(randomvid);

		var videoID = songRepo[mood][randomvid]["youTubeID"];

		// console.log(videoID);

		var videoURL = "http://www.youtube.com/embed/" + videoID;

		// console.log(videoURL);

		$("#currentVideo").attr("src", videoURL);

		var vidTitle = songRepo[mood][randomvid]["name"];

		$('#videoTitle').text(vidTitle);

		$('.reloadVid').removeClass('hideVid');

		$('.reloadVid').addClass('showVid');

		$('.instructions').remove();

		$('.top-block .boton').removeClass('is-hidden');



		
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
			"name": "Like an Irish pub!",
			"youTubeID": "sEXHeTcxQy4?autoplay=1",
		},

		{"name": "Happiest song ever!",
			"youTubeID": "y6Sxv-sUYtM?autoplay=1",},


		{"name": "So much feel good...",
			"youTubeID": "oDuif301F-8?autoplay=1",},
	],
	

	"sad" : [

		{
			"name": "Gloomy Souls",
			"youTubeID": "5anLPw0Efmo?autoplay=1",
		},

		{"name": "For My Lost Love",
			"youTubeID": "hLQl3WQQoQ0?autoplay=1",},


		{"name": "Oh, So Sad...",
			"youTubeID": "i1GmxMTwUgs?autoplay=1",},
	],

	"breakstuff" : [

		{
			"name": "Everybody sucks!",
			"youTubeID": "ZpUYjpKg9KY?autoplay=1",
		},

		{"name": "Metal. Angry. Metal!",
			"youTubeID": "yd972J6f4IY?autoplay=1",},

		{"name": "Metal Apocalypse!",
		"youTubeID": "_HxV65bn0Zw?autoplay=1",},


		{"name": "Angry Doom Rap!",
			"youTubeID": "Ox0Q4YIdnGI?autoplay=1",},
	],

	"sexy" : [

		{
			"name": "Bringing sexy...back...",
			"youTubeID": "3gOHvDP_vCs?autoplay=1",
		},

		{"name": "Sexy Brit...ney...",
			"youTubeID": "Mzybwwf2HoQ?autoplay=1",},


		{"name": "Don't stop, Janet...",
			"youTubeID": "hn81K1Fm03Y?autoplay=1",},
	],

	"lovestruck" : [

		{
			"name": "Surfboarrrrd",
			"youTubeID": "p1JPKLa-Ofc?autoplay=1",
		},

		{"name": "Fall in love",
			"youTubeID": "RsQjC5zVnt8?autoplay=1",},


		{"name": "Never felt so good...",
			"youTubeID": "oG08ukJPtR8?autoplay=1",},
	]


}



// Homepage

// on load, video-sections.is-hidden
// when .sidebar-nav li is clicked
// remove class .is-hdiden from video-sections
// add class .is-hidden to .instructions

// real









