var fixedBox = document.getElementById('fixedBox');
var subTitle = document.getElementById('subTitle');
var verticalTitle = document.getElementById('verticalTitle');
window.addEventListener('scroll', function() {
	fixedBox.style.background = (window.scrollY > 50) ? '0' : 'var(--fixedBoxColour)';
	subTitle.style.color = (window.scrollY > 50) ? '#000000' : '#ffffff';
	verticalTitle.style.color = (window.scrollY > 50) ? '#000000' : '#ffffff';
});