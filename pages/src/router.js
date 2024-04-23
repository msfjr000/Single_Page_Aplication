export class Router {
  backgrounds = {}
  routes = {}
  add (RoutesName, page) {
    this.routes[RoutesName] = page
  }
  addBackgrounds (RoutesName,page) {
    this.backgrounds[RoutesName] = page
  }

  route (event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({},"",event.target.href)

    this.handle()
    
  }

  handle() {
    const {pathname} = window.location;
    const route = this.routes[pathname] || this.routes[404];
    const background = this.backgrounds[pathname];

    if (background == '/pages/home/home.html') {
      const classe = document.documentElement.classList
      document.documentElement.classList.remove(classe)
      document.documentElement.classList.add('home')
    } else if (background == '/pages/universe/universe.html') {
      const classe = document.documentElement.classList
      document.documentElement.classList.remove(classe)
      document.documentElement.classList.add('universe')
    } else if (background == '/pages/exploration/exploration.html') {
      const classe = document.documentElement.classList
      document.documentElement.classList.remove(classe)
      document.documentElement.classList.add('exploration')
    }
    fetch(route).then(data => data.text()).then(html => {
      document.getElementById('app').innerHTML = html
    })

  }
}
