// Function to insert values in String
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
  };

try{  
  // URL example: /product.html?id=product_name
  params = window.location.search.split("id=")[1]
  id = params.split("&")[0]
  
  path = "./products/{}.json".format(id)

  $.ajax({
    url: path,
    dataType: "json",
    success: (data) => loadContents(data)
    })
} catch (e) {
    console.log("Error report: ", e)
} 

function loadContents(data){
  console.log(data)
  var title = data["title"];
  var description = data["description"];
  var images = data["images"];
  var advantages = decorate(data["advantages"].join(" "));
  var how = data["how-to-use"].join(" ");

  document.getElementById("title").innerHTML += `${title}`
  document.getElementById("description").innerHTML = `${description}`
  document.getElementById("advantages").innerHTML = `${advantages}`
  document.getElementById("how-to-use").innerHTML = `${how}`
  document.getElementById("images").innerHTML = createImages(images)
  document.getElementById("defaultImage").style = "display:none"

  // Portfolio details carousel
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  $(document).ready(function() {
    $('.owl-carousel').magnificPopup({
      delegate: 'a',
      type:'image',
      gallery:{
        enabled:true,
        tCounter: ''
        }
      });
  });
}

function decorate(inputString) {
  return inputString.replaceAll("(-)", "<i class='bx bx-check'></i>")
}

function createImages(imagesArray) {
  const base = '<a href="./{}"><img src="{}" class="img-fluid"/></a>';
  var imgs = ""
  imagesArray.forEach(imageSrc => {
    var img = base.format(imageSrc, imageSrc);
    imgs += img
  });
  console.log(imgs);
  return imgs
}

