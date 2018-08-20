let submit = document.getElementsByClassName("button")[0]


// submit.addEventListener('click', (event) => {
//   event.preventDefault()
//   let myNode = document.getElementById('results')
//   myNode.innerHTML = '';
//   let text = document.getElementById("text").value
//   axios.post('/pixelate', {
//     'text': text
//   })
//   .then((response) => {
//     let pixel = response.data
//     let count = 0
//     let pCount = 0
//     let p = document.createElement('p')
//     let parent = document.getElementById('results');
//     for(let i = 0; i < pixel.length; i++){
//       count++
//       let text = document.createTextNode(`${pixel[i]} `)
//       p.appendChild(text)
//       if(count === 5){
//         parent.append(p)
//         count = 0
//         pCount++;
//         p = "div" + pCount
//         p = document.createElement('p')
//       }
//     }
//     console.log(response.data)
//   }).catch(function (error) {
//     console.log(error);
//   });
// })

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
    let count = 0
    let div = document.createElement('div')
    let parent = document.getElementById('results');
    for(let i = 0; i < pixel.length; i++){
      count++
      let p = document.createElement('p')
      let text = document.createTextNode(pixel[i])
      p.append(text)
      div.append(p)
      if(count === 5){
        parent.append(div)
        count = 0
        div = "div" + i
        div = document.createElement('div')
      }
    }
    console.log(response.data)
  }).catch(function (error) {
    console.log(error);
  });
})
