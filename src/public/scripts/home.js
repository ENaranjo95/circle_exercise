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
    console.log(response.data)
    let pixel = response.data
    let parent = document.getElementById('results');
    if( pixel === 'Words Must Only Include Letters!'){
      return parent.append(pixel)
    }
    parent.append(pixel)
  }).catch(function (error) {
    console.log(error);
  });
})
