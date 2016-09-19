function Marathons (alreadyRun, yetToRun, time) {
	this.alreadyRun = alreadyRun;
	this.yetToRun = yetToRun;
	this.time = time;
	this.expected = function() {
		return time - 10;
	};
}

var caliMarathons = new Marathons('Best Of', 'Rock n Roll', 180);

var details1 = 'Already run: ' + caliMarathons.alreadyRun;
var elMarathon1 = document.getElementById('marathon1');
elMarathon1.textContent = details1;

var details2 = 'Still to be done: ' + caliMarathons.yetToRun;
var elMarathon2 = document.getElementById('marathon2');
elMarathon2.textContent = details2;