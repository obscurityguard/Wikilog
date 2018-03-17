var urls = localStorage.getItem("urls")
urls = JSON.parse(urls)
//alert(document.getElementById("container").innerHTML)
document.getElementById("container").innerHTML = urls.map(function(entry){
  var date = entry.date
  date = new Date(date)
  return `<li>${date.toLocaleString('en-AU')} - ${entry.url}</li>`
})
