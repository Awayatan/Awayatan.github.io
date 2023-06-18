var dts = document.querySelectorAll('.dt');
var dds = document.querySelectorAll('.dd');

function toggleAccordion() {
  var dd = this.nextElementSibling;
  if (dd.style.display === 'block') {
    dd.style.display = 'none';
  } else {
    closeAllAccordions();
    dd.style.display = 'block';
  }
  updateColors();
}

function closeAllAccordions() {
  dds.forEach(function(dd) {
    dd.style.display = 'none';
  });
}

function updateColors() {
  var anyOpen = false;
  dts.forEach(function(dt) {
    var dd = dt.nextElementSibling;
    if (dd.style.display === 'block') {
      dt.style.color = '#ffffff';
      dt.style.borderBottom = "1px solid #ffffff";
      anyOpen = true;
    } else {
      dt.style.color = '#a3a3a3';
      dt.style.borderBottom = "0px solid #ffffff";
    }
  });

  if (!anyOpen) {
    dts.forEach(function(dt) {
      dt.style.color = '#ffffff';
    });
  }
}

dts.forEach(function(dt) {
  dt.addEventListener('click', toggleAccordion);
});

updateColors();
