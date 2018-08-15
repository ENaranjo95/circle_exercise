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
    let count = 0
    let divCount = 0
    let divName = document.createElement('div')
    let div = document.createElement('div')
    for(let i = 0; i < pixel.length; i++){
      count++
      let parent = document.getElementById('results');
      let p = document.createElement('p')
      let text = document.createTextNode(pixel[i])
      p.append(text)
      divName.append(p)
      if(count === 5){
        parent.append(divName)
        count = 0
        divCount++;
        divName = "div"+divCount
        divName = document.createElement('div')
      }
    }
    console.log(response.data)
  }).catch(function (error) {
    console.log(error);
  });
})
