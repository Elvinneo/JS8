

let btn= document.getElementById('btn')
let say=0
let yox=0
btn.addEventListener("click",()=>{yox<10?(say++,yox++):say--,say==1? yox=say:yox,btn.textContent=`Clicked ${say}`})


