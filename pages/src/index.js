import { Router } from "./router.js";
const rout = new Router()
rout.add('/home',"/pages/home/home.html" )
rout.add("/universe","/pages/universe/universe.html")
rout.add("/exploration","/pages/exploration/exploration.html")
rout.add("404","/pages/404/404.html")
rout.addBackgrounds('/home',"/pages/home/home.html" )
rout.addBackgrounds("/universe","/pages/universe/universe.html")
rout.addBackgrounds("/exploration","/pages/exploration/exploration.html")
rout.addBackgrounds("404","/pages/404/404.html")

rout.handle()

window.onpopstate = () => rout.handle()
window.route = () => rout.route()

