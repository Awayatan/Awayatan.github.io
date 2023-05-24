const btn = document.querySelector("#darkmode");
const root = document.documentElement;

btn.addEventListener("change", () => {
  if (btn.checked) {
		root.style.setProperty("--backgroundColour", "#1b1210");
		root.style.setProperty("--quoteBoxColour", "#3b3230");
		root.style.setProperty("--fixedBoxColour", "linear-gradient(210deg, #946464, 70%, #515895)");
		root.style.setProperty("--lineColour","#e394a4");
		root.style.setProperty("--boxPinkColour","#8f8684");
		root.style.setProperty("--boxGreenColour","#8e8f84");
		root.style.setProperty("--boxBlueColour","#84868f");
		root.style.setProperty("--fontColourMain","#e3e3e3");
		root.style.setProperty("--fontColourIndex","#e3e3e3");
		root.style.setProperty("--fontColourSmallindex","#1e1e1e");
		root.style.setProperty("--titleareaColour","linear-gradient(90deg, #8f6e5a, 70%, #915895)");
		root.style.setProperty("--articleTitleColour","#9f6e5a");
  } else {
		root.style.setProperty("--backgroundColour", "#fff6f4");
		root.style.setProperty("--quoteBoxColour", "#fbf2ee");
		root.style.setProperty("--fixedBoxColour", "linear-gradient(210deg, #d4a4a4, 70%, #9198e5);");
		root.style.setProperty("--lineColour","#d3d3d3");
		root.style.setProperty("--boxPinkColour","#efe6e4");
		root.style.setProperty("--boxGreenColour","#eeefe4");
		root.style.setProperty("--boxBlueColour","#e4e6ef");
		root.style.setProperty("--fontColourMain","#111111");
		root.style.setProperty("--fontColourIndex","#343434");
		root.style.setProperty("--fontColourSmallindex","#717171");
		root.style.setProperty("--titleareaColour","linear-gradient(90deg, #cfae9a, 70%, #d198d5)");
		root.style.setProperty("--articleTitleColour","#cfae9a");

	}
});