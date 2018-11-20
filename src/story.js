export default {
	parts: ["Alerted by <%= reason %>...", 
			"...<%= group%>...", 
			"...used <%= explanation %>...", 
			"...to shrink <%= device%> down to quantum scale.", 
			"What started as <%= description %>...", 
			"...turned out to be <%= finale %>!"],

	reason: [
		{text: "an urgent national security concern of highly classified nature", image: "Classified.gif"},
		{text: "the ongoing loss of traditional values", image:"traditional-family.jpg" },
		{text: "unexplained oscillations in the social web", 
			image:["social-media1.jpg"]},
		//{text: "strange quantum events at a macroscopic scale", image:"entangled.jpg"},
		{text: "a sudden increase of global warming", 
			image:["polarbear.jpg", "Fight-Global-Warming-global-warming-prevention-725103_1280_1024.jpg"]},
		{text: "GNU violation reports", image:"GNU-Linux.png"},
	],

	group: [
			{text: "a highly skilled team of Metalab members", 
				image:["metalab.jpeg", "Metalab06LR.jpg", "600px-Metalab_wappen_neu.png", 
				"800px-Lounge_idealzustand.JPG"]}, 
			{text: "a team of alien scientists", image: "socialistspaceWorkers.jpg",
			 url:"http://historiesofthingstocome.blogspot.co.at/2010/08/retro-futurism-4-russians-in-space.html"}, 
			{text:"a paranoid superintelligent bonobo who escaped from a secret CIA prison", 
				image:["bonobo-portrait.jpg", "bonobo.jpg"]},
			{text: "an adventurous giraffe", 
				image:["giraffe.jpg", "giraffe2.jpeg", "giraffe3.jpeg", "giraffe4.jpeg"],
				url:"http://www.giraffes.org/giraffelink.html"},
			{text:"the US goverment in accordance with their handlers", 
				image:["usalien.png", "illuminati.jpg", "usalien.png"] },
			//{text:"Boxxy", image:["boxxy.jpg", "boxxy2.png"]},
	], 

	explanation: [
		{text: "an arduino hack", image: ["arduinohack.jpg", "Arduino-Powerglove.jpg"]},
		{text: "lean management principles", image: "lean.jpg"}, 
		{text: "a classic McGyver technique", image: ["macgyver.jpg", "macgyver2.jpg", "macgyver3.jpg"]}, 
		{text: "innovative js libraries", image:"JavaScript_Tools_Library_Frameworks.jpg"},
		{text: "a digital matter manipulator", image: "complexdevice.jpg"},
		{text: "a directed explosion aproach not unlike some of the concepts of project Orion", image: "orion.gif"},
	],

	device: [
				{text: "a retrofitted space shuttle", image:"spaceShuttle.jpg", 
				 url: "http://www.wired.com/images_blogs/wiredscience/2012/04/space-shuttle-discovery-jurvetson-flickr.jpg"}, 
				{text: "a russian nuclear submarine with a critical core", image:"submarine.jpg"},
				{text:"a timemachine", image:"timemachine.jpg"},
				{text:"a DIY spaceship", image: "diy-spacecraft-1.jpg"},
				{text:"a spaceship from a parallel timeline", image: "rocketpreparations.jpg"},
				{text:"a huge robot", image:["landwalker.jpeg", "robotbog.jpg", "kidswalkerrobot.jpg"]},
	],



	description: [
		{text: "a quest to kill space nazis", image:"spacenazi.jpg"}, 
		{text: "the search for the holy grail of quantum mechanics", image: "quantum.jpg"},
		{text: "an harmless adventure between consenting adults", image: "consenting.jpg"},
		{text: "a quest to enlighten mankind", image: "enlightenment.jpeg"},
		//{text: "as a simple preparation step", image: "xkcdsuccess.png"},
		//{text: "as a public backup solution for classified power point presentations", 
		//	image:["publicBackup.jpg", "big-prism-snowden-greenwald.jpg"]},
	],

	finale: [
		{text: "an adventure in a cellular world unseen by anyone before", image: "blue.jpg"},
		{text: "a universe of cellular automata hidden in every atom", image: "cellcity.jpg"}, 
		{text: "ALL YOUR BASE ARE BELONG TO US", image: "allYourBase.jpg"},
	],
}