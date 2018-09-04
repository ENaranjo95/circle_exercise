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
    console.log(response)
    const pixel = response.data
    const parent = document.getElementById('results');
    parent.append(pixel)
  }).catch(function (error) {
    parent.append(error)
    console.log(error);
  });
})
