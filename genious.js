

// only for card one and card second 

function setInput(elementId) {
    const InputFieldValue = document.getElementById(elementId).value
    const InputFieldNumber = parseFloat(InputFieldValue)
    document.getElementById(elementId).value=''
    return InputFieldNumber
}

// random color genaret 
function getColor(){
//    const select document.getElementById('card-color')

    const ranDom = Math.floor(Math.random() * 16777215);
   const ranDomCode = "#" + ranDom.toString(16)
//    const color = 
// document.body.style.backgroundColor =ranDomCode
return ranDomCode
  


  

}

// random color genaret  final

document.getElementById('card-one-color').addEventListener('mouseenter',function(){
    const color = document.getElementById('card-one-color')
   
    const ranDom = Math.floor(Math.random() * 16777215);
   const ranDomCode = "#" + ranDom.toString(16)
    color.style.backgroundColor = ranDomCode
})
document.getElementById('card-four-color').addEventListener('mouseenter',function(){
    const color = document.getElementById('card-four-color')
   
    const ranDom = Math.floor(Math.random() * 16777215);
   const ranDomCode = "#" + ranDom.toString(16)
    color.style.backgroundColor = ranDomCode
})
document.getElementById('card-six-color').addEventListener('mouseenter',function(){
    const color = document.getElementById('card-six-color')
   
    const ranDom = Math.floor(Math.random() * 16777215);
   const ranDomCode = "#" + ranDom.toString(16)
    color.style.backgroundColor = ranDomCode
})
document.getElementById('card-two-color').addEventListener('mouseenter',function(){
    const color = document.getElementById('card-two-color')
   
    const ranDom = Math.floor(Math.random() * 16777215);
   const ranDomCode = "#" + ranDom.toString(16)
    color.style.backgroundColor = ranDomCode
})
document.getElementById('card-three-color').addEventListener('mouseenter',function(){
    const color = document.getElementById('card-three-color')
   
    const ranDom = Math.floor(Math.random() * 16777215);
   const ranDomCode = "#" + ranDom.toString(16)
    color.style.backgroundColor = ranDomCode
})
document.getElementById('card-five-color').addEventListener('mouseenter',function(){
    const color = document.getElementById('card-five-color')
   
    const ranDom = Math.floor(Math.random() * 16777215);
   const ranDomCode = "#" + ranDom.toString(16)
    color.style.backgroundColor = ranDomCode
})

// document.querySelector('#card-one-color').addEventListener('mouseenter',function(){
//     getColor()
// })
// document.querySelector('#card-two-color').addEventListener('mouseenter',function(){
//     getColor()
// })
// document.querySelector('#card-three-color').addEventListener('mouseenter',function(){
//     getColor()
// })
// document.querySelector('#card-four-color').addEventListener('mouseenter',function(){
//     getColor()
// })
// document.querySelector('#card-five-color').addEventListener('mouseenter',function(){
//     getColor()
// })
// document.querySelector('#card-six-color').addEventListener('mouseenter',function(){
//     getColor()
// })


// table data

function tableData(count,total,name){
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr');
    tr.innerHTML = `
 <td>${count}</td>
 <td><span class="text-sm">${name}</span></td>
 <td>${total} cm<sup>2</sup></td>
 
 <td><button class="btn-primary p-1 text-sm rounded ">convert m<sup>2</sup></button></td>


 

  
 
 `

    container.appendChild(tr)

}

// for two count calculation

function twoCount (firstInput,secondInput){
    
    const total = parseFloat(firstInput) * parseFloat(secondInput)
    return total
    
}


// for three count calculation

function threeCount (firstInput,secondInput){
    const total = 0.5 * parseFloat(firstInput) * parseFloat(secondInput)
    return total
    
}








let count = 0;

// triangle 
document.getElementById('card-one-btn').addEventListener('click', function () {
    const firstInput = setInput('triangle-field-first')
    const secondInput = setInput('triangle-field-second')
    const name = "Triangle"
    count ++
    getColor()
  
 
    const total = threeCount(firstInput,secondInput)
  
  
  if(isNaN(total)){
   const wrong = alert('give me valid number')
    return wrong
  }

  else{
    const final =  tableData(count,total,name)
    return final

  }


   


})




// Rectangle
document.getElementById('card-two-btn').addEventListener('click', function () {
    const firstInput = setInput('Rectangle-field-first')
    const secondInput = setInput('Rectangle-field-second')
    const name = "Rectangle"
    count ++
    getColor()
   

    const total = twoCount(firstInput,secondInput)


    if(isNaN(total)){
        const wrong = alert('give me valid number')
         return wrong
       }
     
       else{
         const final =  tableData(count,total,name)
         return final
     
       }
     
   


})


// Parallelogram

document.getElementById('card-three-btn').addEventListener('click', function () {
    const b = 10
    const h = 12
    const name ="Parallelogram"
    count ++
   

    const total = twoCount(b,h)
tableData(count,total,name)
getColor()
})





// Rhombus
document.getElementById('card-four-btn').addEventListener('click', function () {
    const d1 = 16
    const d2 = 8
    const name = "Rhombus"
    count ++
   

    const total = twoCount(d1,d2)
  
        tableData(count,total,name)
        getColor()

})





// Pentagon

document.getElementById('card-five-btn').addEventListener('click', function () {
    const p = 6
    const b = 10
    const name = "Pentagon"
    count ++
   

    const total = threeCount(p,b)
  

        tableData(count,total,name)

    
        getColor()


})





// Ellipse

document.getElementById('card-six-btn').addEventListener('click', function () {
    const a = 10
    const b = 4
    const name ="Pentagon"
    count ++
   

    const pi = 3.14159

    const total = (parseFloat(pi) * parseFloat(a) * parseFloat(b)).toFixed(2)
    tableData(count,total,name)


getColor()

})





