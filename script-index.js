const observer = lozad();
observer.observe();

var loadAnimation = bodymovin.loadAnimation({
    container: loading,
    renderer: 'svg',
    loop:true,
    autoplay: true,
    path: 'data.json'
  })
  
  
  
  window.addEventListener("load", function () {
    const loader = document.querySelector(".loading");
    loader.className += " hidden"; //class "loader hidden"
  });

  