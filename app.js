
window.addEventListener('popstate', function (event) {
  console.log(event)
  route()
})

document.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    // if (event.target.href.startsWith(window.target.origin)) {    // we need to do this to allow user to click on links to external sites like Google
    event.preventDefault()
    console.log(event)
    history.pushState(null,'', event.target.attributes.href.value)
    route()
    // }
  }
})

document.getElementById('dropDownList').addEventListener('change', function (event) {
  // var userInput = event.options[event.selectedIndex].value
  var index = event.target.options.selectedIndex
  var options = Array.from(event.target.options)
  history.pushState(null, '', options[index].value)
  route()
})

function route () {
  Array.from(document.querySelectorAll('section'))   // need to do this to convert node list to array
    .forEach(section => { section.style.display = 'none' })

  switch (window.location.pathname) {
    case '/about':
      document.title = "About Us"
      document.querySelector('#about')
        .style.display = 'block'
      break
    case '/shop/':
    document.title = "Our products"
    document.querySelector('#shop')
      .style.display = 'block'
      break;
    default:
      document.querySelector('#error404').style.display = 'block'
}}

route()

  // Array.from(document.querySelectorAll('nav a'))     // need to do this to convert node list to array
  //   .forEach(anchor => {
  //     anchor.addEventListener('click', event => {
  //       console.log(anchor);
  //       event.preventDefault()
  //       history.pushState(null, '', anchor.attributes.href.value)

// display all to none first, then select which one you want to display
