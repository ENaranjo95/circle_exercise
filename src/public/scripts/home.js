let submit = document.getElementsByClassName("button")[0]


submit.addEventListener('click', (event) => {
  event.preventDefault()
  let text = document.getElementById("text").value
  axios.post('/pixelate', {
    'text': text
  })
  .then((response) => {
    let pixel = response.data
    let parent = document.getElementById('results');
    let div = document.createElement('div')
    parent.append(div)

    console.log(response.data)
  }).catch(function (error) {
    console.log(error);
  });
})
