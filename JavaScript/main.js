const getNumber = (a) =>{
  const element = document.getElementById(a);
  const num = parseFloat(element.value);
  element.value = '';
  
  return num;
}

const setNum = (element, area)=>{
  document.getElementById(element).innerText = area;

}

const validation = (a, b) =>{
  if(isNaN(a) || isNaN(b)){
    return alert('input should be a number');
  }
}