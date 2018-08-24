let submit = document.getElementsByClassName("button")[0]


submit.addEventListener('click', (event) => {
  event.preventDefault()
  let myNode = document.getElementById('results')
  myNode.innerHTML = '';
  let text = document.getElementById("text").value
  axios.post('/pixelate', {
    'text': text
  })
  .then((response) => {
    let pixel = response.data
    let parent = document.getElementById('results');
    let div = document.createElement('div')
    if(pixel === 'Words Must Only Include Letters!'){
      return parent.append(pixel)
    }
    let count = 0
    let divCount = 0
    for(let i = 0; i < pixel.length; i++){
      count++
      div.append(`${pixel[i]} `)
      if(count === 5){
        parent.append(div)
        count = 0
        divCount++;
        p = "div" + divCount
      }
    }
    console.log(response.data)
  }).catch(function (error) {
    console.log(error);
  });
})

// submit.addEventListener('click', (event) => {
//   event.preventDefault()
//   let parent = document.getElementById('results');
//   parent.innerHTML = '';
//   let text = document.getElementById("text").value
//   axios.post('/pixelate', {
//     'text': text
//   })
//   .then((response) => {
//     let pixel = response.data
//     for(let i = 0; i < pixel.length; i++){
//       let text = pixel[i]
//       parent.append(`${text} `)
//     }
//     console.log(response.data)
//   }).catch(function (error) {
//     console.log(error);
//   });
// })
