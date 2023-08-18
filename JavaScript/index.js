const traingleBtn = document.getElementById('traingle-btn');
const rectangleBtn = document.getElementById('rectangle-btn');

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
