/* 2023/05/24 update */

var header = document.getElementById('header');
var bgTitle = document.getElementById('bg-title');
var indexList = document.getElementById('indexList');
var aTags = indexList.getElementsByTagName("a");
var postDate = document.getElementById("post-date");
var lastUpdateDate = document.getElementById("last-update-date");
var outline = document.getElementById("outline");
var height = 240;

window.addEventListener('scroll', function() {
	if (window.scrollY > 50) {
		header.style.height = '357px';
		bgTitle.style.opacity = '0.1';
		bgTitle.style.lineHeight = '30px';
		for (var i = 0; i < aTags.length; i++) {
			aTags[i].style.pointerEvents = 'none';
			aTags[i].style.opacity = '0';
		}
	} else {
		header.style.height = '100%';
		bgTitle.style.opacity = '1';
		bgTitle.style.lineHeight = '180px';
		for (var i = 0; i < aTags.length; i++) {
			aTags[i].style.pointerEvents = 'auto';
			aTags[i].style.opacity = '1';
		}
	}
});

header.addEventListener('click', function() {
	if (window.scrollY > 50) {
	  	header.style.height = '100%';
		for (var i = 0; i < aTags.length; i++) {
			aTags[i].style.pointerEvents = 'auto';
			aTags[i].style.opacity = '1';
		}
	}
});

var articleTitleContainerHeight = document.getElementById("article-title-container").offsetHeight;
var articleWrapper = document.getElementById('article-wrapper');

window.addEventListener('resize', function() {
	articleTitleContainerHeight = document.getElementById("article-title-container").offsetHeight + 50;
  	articleWrapper.style.paddingTop = articleTitleContainerHeight + 'px';
});

window.addEventListener('DOMContentLoaded', function() {
	articleTitleContainerHeight = document.getElementById("article-title-container").offsetHeight + 50;
	articleWrapper.style.paddingTop = articleTitleContainerHeight + 'px';
});