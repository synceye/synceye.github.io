// Made by Lummit - https://obnoxious.club/ | https://github.com/Lumm1t/ | Discord: Lummit#0201
// Credits to expl0it, shellcode.team
// GitHub: https://github.com/Lumm1t/obnoxious.club

var _app = function () {
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.12;
    this.musicFadeIn = 4000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
    this.brandDescription = [
        "13 yo", 
        "Fornite x CS:GO", 
        ".net developer", 
        "Programmer", 
        "hack vs school",
	".vb programmer",
	"sync edits in vegas pro 15",
	"SchoolMaster ByPasser v1.0",
	 "13 yo", 
        "Fornite x CS:GO", 
        ".net developer", 
        "Programmer", 
        "hack vs school",
	".vb programmer",
	"sync edits in vegas pro 15",
	"SchoolMaster ByPasser v1.0",
	 "13 yo", 
        "Fornite x CS:GO", 
        ".net developer", 
        "Programmer", 
        "hack vs school",
	".vb programmer",
	"sync edits in vegas pro 15",
	"SchoolMaster ByPasser v1.0",
        "13 yo", 
        "Fornite x CS:GO", 
        ".net developer", 
        "Programmer", 
        "hack vs school",
	".vb programmer",
	"sync edits in vegas pro 15",
	"SchoolMaster ByPasser v1.0",
		
    ];

    this.titleChanger = function (text, delay) {
        text = text ||
            ['@_daamjan_', 'sync.web', 'Song name: Klinac x Bogi - Lucifer'];
        delay = delay || 2000;

        var counter = 0;

        setInterval(function () {
            if(counter < text.length) 
                document.title = text[counter++]; 
            else 
                document.title = text[counter = 0];
        }, delay);
    }

    this.iconChanger = function (urls, delay) {
        if (!urls)
            return;

        delay = delay || 2000;

        var counter = 0;
        
        setInterval(function () {
            if(counter < urls.length) {
                var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = urls[counter];
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            else 
                counter = 0;

           ++counter;
        }, delay);
    }
};

var app = new _app();
