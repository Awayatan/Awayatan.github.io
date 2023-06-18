const canvasWrapper = document.getElementById("canvas");
const canvas = document.getElementById("bg-canvas");
const context = canvas.getContext("2d");
let bgcolour = "#222222";

if (window.location.search.includes("notsummernight")) {
  canvas.style.visibility = "collapse";
}

function isHexColorCode(input) {
  var hexColorCodePattern = /^[0-9a-fA-F]{6}$/;
  return hexColorCodePattern.test(input);
}
if (window.location.search.includes("colourfuldays")) {
  let colourtag = prompt("6-digit string consisting of 0-9 a/o a-f.");
  if(isHexColorCode(colourtag)){
    bgcolour = "#" + colourtag;
  }else{
    bgcolour = "#222222";
  }
}

// 画面サイズに合わせてcanvasのサイズを設定する関数
function resizeCanvas() {
  canvas.width = canvasWrapper.offsetWidth;
  canvas.height = canvasWrapper.offsetHeight;
}

// 初回のcanvasサイズ設定
resizeCanvas();

// ウィンドウのリサイズイベントを監視し、canvasサイズを更新する
window.addEventListener("resize", resizeCanvas);

// 丸を表すクラス
class Circle {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.angle = Math.random() * Math.PI * 2;
    this.alpha = 1; // 透明度の初期値を設定
    this.fadeSpeed = Math.random() * 0.04 + 0.02; // 点滅の速度をランダムに設定
    this.isFadingOut = true; // 点滅状態を表すフラグ
  }

  // 丸を描くメソッド
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.closePath();
    context.fillStyle = `rgba(182, 258, 242, ${this.alpha})`;
    context.fill();

    // 点滅のロジック
    if (this.isFadingOut) {
      this.alpha -= this.fadeSpeed; // 透明度を減少させる
      if (this.alpha <= 0) {
        this.isFadingOut = false;
      }
    } else {
      this.alpha += this.fadeSpeed; // 透明度を増加させる
      if (this.alpha >= 1) {
        this.isFadingOut = true;
      }
    }
  }

  // 丸の移動と軌道の制約
  move() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    // 画面外に出ないように制約をかける
    if (this.x < this.radius || this.x > canvas.width - this.radius) {
      this.angle = Math.PI - this.angle;
    }
    if (this.y < this.radius || this.y > canvas.height - this.radius) {
      this.angle = -this.angle;
    }
  }
}

// 丸の数と速度を設定
let circleCount = 20;
let circleSpeed = 0.6;

if (window.location.search.includes("moreandmore")) {
circleCount = prompt("so, how many dots do you want?");
}

if (window.location.search.includes("fasterandfaster")) {
circleSpeed = prompt("attain a speed faster than light!");
}

// 丸の配列を作成
const circles = [];
for (let i = 0; i < circleCount; i++) {
  const x = Math.random() * (canvas.width - 50);
  const y = Math.random() * (canvas.height - 50);
  const radius = 2;
  const circle = new Circle(x, y, radius, circleSpeed);
  circles.push(circle);
}

// 線を表すクラス
class Line {
  constructor(circle1, circle2) {
    this.circle1 = circle1;
    this.circle2 = circle2;
    this.alpha = 1; // 透明度の初期値を設定
    this.fadeSpeed = 0.02; // 点滅の速度を設定
    this.isFadingOut = true; // 点滅状態を表すフラグ
  }

  // 線を描くメソッド
  draw() {
    context.beginPath();
    context.moveTo(this.circle1.x, this.circle1.y);
    context.lineTo(this.circle2.x, this.circle2.y);
    context.strokeStyle = `rgba(242, 242, 242, ${this.alpha})`;
    context.stroke();

    // 点滅のロジック
    if (this.isFadingOut) {
      this.alpha -= this.fadeSpeed; // 透明度を減少させる
      if (this.alpha <= 0) {
        this.isFadingOut = false;
      }
    } else {
      this.alpha += this.fadeSpeed; // 透明度を増加させる
      if (this.alpha >= 1) {
        this.isFadingOut = true;
      }
    }
  }
}

// 線の配列を作成
let lines = [];
let currentIndex = 0; // 現在表示中の線のインデックス

// ランダムな線の生成
function generateRandomLine() {
  const selectedIndexes = [];
  while (selectedIndexes.length < 2) {
    const index = Math.floor(Math.random() * circles.length);
    if (!selectedIndexes.includes(index)) {
      selectedIndexes.push(index);
    }
  }

  const circle1 = circles[selectedIndexes[0]];
  const circle2 = circles[selectedIndexes[1]];
  const line = new Line(circle1, circle2);
  lines[currentIndex] = line;
}

// アニメーションの更新
function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = bgcolour;
  if (window.location.search.includes("balus!")) {
    bgcolour = "#ffffff";
  }
  context.fillRect(0, 0, canvas.width, canvas.height);

  // 丸の描画と移動
  for (const circle of circles) {
    circle.draw();
    circle.move();
  }

  // 線の描画
  for (const line of lines) {
    if (line) {
      line.draw();
    }
  }

  requestAnimationFrame(update);
}

// ランダムな線の生成と表示の更新
function updateLines() {
  generateRandomLine();
  currentIndex++;
  if (currentIndex === 25) {
    currentIndex = 0;
  }
  setTimeout(() => {
    lines[currentIndex] = null;
    requestAnimationFrame(updateLines);
  }, 800);
}

// アニメーションの開始
updateLines();
update();
