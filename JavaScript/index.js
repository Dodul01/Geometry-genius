const traingleBtn = document.getElementById('traingle-btn');
const rectangleBtn = document.getElementById('rectangle-btn');
const parallelogramBtn = document.getElementById('parallelogram-btn');
const rhombusBtn = document.getElementById('rhombus-btn');
const pentagonBtn = document.getElementById('pentagon-btn');
const ellipseBtn = document.getElementById('ellipse-btn');

traingleBtn.addEventListener('click', ()=>{
  const base = getNumber('base');
  const height = getNumber('height');

  validation(base, height);
  const area = 0.5 * base * height;

  setNum('triangle-result', area);
})

rectangleBtn.addEventListener('click', ()=>{
  const widthValue = getNumber('width');
  const lengthValue = getNumber('length');
  
  validation(widthValue, lengthValue);
  const area = widthValue * lengthValue;

  setNum('rectangle-result', area);
});

parallelogramBtn.addEventListener('click', ()=>{
  const base = getNumber('parallelogram-base');
  const height = getNumber('parallelogram-height');

  validation(base, height);
  const area = base * height;
  
  setNum('parallelogram-result', area);
})

rhombusBtn.addEventListener('click', ()=>{
  const d1 = getNumber('rhombus-d1');
  const d2 = getNumber('rhombus-d2');

  validation(d1, d2);
  const area = 0.5 * d1 * d2;

  setNum('rhombus-result', area);
})

pentagonBtn.addEventListener('click', ()=>{
  const pentagonP = getNumber('pentagon-p');
  const pentagonB = getNumber('pentagon-b');

  validation(pentagonP, pentagonB);
  const area = 0.5 * pentagonP * pentagonB;

  setNum('pentagon-result', area);
})

ellipseBtn.addEventListener('click', ()=>{
  const a = getNumber('ellipseA');
  const b = getNumber('ellipseB');

  validation(a, b);
  const area = Math.PI * a * b;
  setNum('ellipse-result', area.toFixed(2));
})