/* 2023/05/25 update */

const btn = document.querySelector("#darkmode");
const root = document.documentElement;

btn.addEventListener("change", () => {
  if (btn.checked) {
	root.style.setProperty("--bg-colour", "#040404");
	root.style.setProperty("--hd-colour", "#000000");
	root.style.setProperty("--title-colour", "#ffffff");
	root.style.setProperty("--glass-colour", "#d3d3d3");
	root.style.setProperty("--line-colour", "#e394a4");
  } else {
	root.style.setProperty("--bg-colour", "#d3d3d3");
	root.style.setProperty("--hd-colour", "#ffffff");
	root.style.setProperty("--title-colour", "#000000");
	root.style.setProperty("--glass-colour", "#ffffff");
	root.style.setProperty("--line-colour", "#3d3d3d");
	}
});