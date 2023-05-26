import { planetService } from "../services/PlanetService.js"
import BaseController from "../utils/BaseController.js"

export class PlanetsController extends BaseController{
constructor(){
super('api/planets')
this.router
.post('',this.createPlanet)
.get('',this.getPlanets)


}
async  getPlanets(req, res, next) {
try {
const query = req.query
const planets = await planetService.getPlanet(query)
return res.send(planets)
} catch (error) {
next(error)
}
}
 async  createPlanet(req, res, next) {
 try {
    const planetData = req.body
    const newPlanet = await planetService.createPlanet(planetData)
  return  res.send(newPlanet)
} catch (error) {
   next(error)    }
    }

  

    

}