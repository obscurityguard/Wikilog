var urls = localStorage.getItem("urls") || "[]"
console.log(urls)
urls = JSON.parse(urls)
//alert(document.getElementById("container").innerHTML)
var entries = urls.map(function(entry){
  var date = entry.date
  date = new Date(date)
  return `<li>${date.toLocaleString('en-AU')} - ${entry.url}</li>`
})
document.getElementById("container").innerHTML = entries.join("")
if(entries.length == 0) {
  document.getElementById("message").innerHTML = "No items"
}
