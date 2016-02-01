
document.getElementById('dropDownList').addEventListener('change', function (event) {
  // var userInput = event.options[event.selectedIndex].value
  var index = event.target.options.selectedIndex
  var options = Array.from(event.target.options)
  history.pushState(null, '', options[index].value)
  route()
})

function Router (routes) {
  window.addEventListener('popstate', function (event) {
    console.log(event)
    this.route()
  }.bind(this))

  document.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      // if (event.target.href.startsWith(window.target.origin)) {    // we need to do this to allow user to click on links to external sites like Google
      event.preventDefault()
      console.log(event)
      history.pushState(null,'', event.target.attributes.href.value)
      this.route()
    }
  }.bind(this))
  this.route()  //we need to check the current URL against all the routes upon instantiation
}

Router.prototype.route = function route () {
  console.log("testing");
    Array.from(document.querySelectorAll('section'))   // need to do this to convert node list to array
      .forEach(function (section) { section.style.display = 'none' })

      Object.keys(this.routes.forEach(function (key) {
        // console.log(this.routes[key])
        if (key === window.location.pathname) {
          var handler = this.routes[key]
          document.title = handler.title
          document.querySelector(handler.element)
            .style.display = 'block'
        }
      }).bind(this)

      // switch (window.location.pathname) {
      //   case '/about':
      //     document.title = 'About Us'
      //     document.querySelector('#about')
      //       .style.display = 'block'
      //     break
      //   case '/shop':
      //     document.title = 'SG50 Shop'
      //     document.querySelector('#products')
      //       .style.display = 'block'
      //     break
      //   case '/':
      //     document.title = 'Homepage'
      //     document.querySelector('#landing')
      //       .style.display = 'block'
      //     break
      //   default:
      //     document.querySelector('#error404').style.display = 'block'
      // }
    )}

module.exports = Router

// switch (window.location.pathname) {
//   case '/about':
//     document.title = 'About Us'
//     document.querySelector('#about')
//       .style.display = 'block'
//     break
//   case '/shop':
//     document.title = 'SG50 Shop'
//     document.querySelector('#products')
//       .style.display = 'block'
//     break
//   case '/':
//     document.title = 'Homepage'
//     document.querySelector('#landing')
//       .style.display = 'block'
//     break
//   default:
//     document.querySelector('#error404').style.display = 'block'
// }

// class Router {
//   constructor (routes) {
//     this.mySecretRoutes = routes
//
//     window.addEventListener('popstate', event => {
//       console.log(event)
//       this.route()
//     })
//
//     document.addEventListener('click', event => {
//       if (event.target.tagName === 'A') {
//         if (event.target.href.startsWith(window.location.origin)) {
//           event.preventDefault()
//           console.log(event)
//           history.pushState(null, '', event.target.attributes.href.value)
//           this.route()
//         }
//       }
//     })
//   }
//
//   route () {
//     Array.from(document.querySelectorAll('section'))
//       .forEach(function (section) {
//         section.style.display = 'none'
//       })
//
//     switch (window.location.pathname) {
//       case '/about':
//         document.title = 'About Us'
//         document.querySelector('#about')
//           .style.display = 'block'
//         break
//       case '/shop':
//         document.title = 'SG50 Shop'
//         document.querySelector('#products')
//           .style.display = 'block'
//         break
//       case '/':
//         document.title = 'Homepage'
//         document.querySelector('#landing')
//           .style.display = 'block'
//         break
//       default:
//         document.querySelector('#error404').style.display = 'block'
//     }
//   }
// }
