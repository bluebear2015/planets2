import BaseController from "../utils/BaseController.js"
import { galaxysService } from"../services/GalaxysService"
import { planetService } from "../services/PlanetService.js"
export class GalaxysController extends BaseController{
    constructor(){
super('api/galaxy')
this.router
.get('', this.getGalaxy)
.get('/:galaxyId/planets', this.getPlanetsByGalaxyId)
.post('', this.createGalaxy)

    }
    async getGalaxy(req, res, next) {
try {
    const query = req.query
    const galaxy = await galaxysService.getGalaxy(query)
    res.send(galaxy)
} catch (error) {
next    (error)
}}

async createGalaxy(req, res, next){
    try {
        const galaxyData = req.body
        const newGalaxy = await galaxysService.createGalaxy(galaxyData)
   return res.send(newGalaxy)
    } catch (error) {
        next(error)
    }
}

async getPlanetsByGalaxyId(req, res, next) {
    try {
        const galaxyId = req.params.galaxyId
        const Planet = await planetService.getPlanetsByGalaxyId(galaxyId)
        return res.send(Planet)
    } catch (error) {
        next(error)
    }
}

}