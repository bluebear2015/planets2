import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { Query } from "mongoose"


class PlanetService {
    async getPlanetsByGalaxyId(galaxyId) {
        const galaxy = await dbContext.Planets.find({ galaxyId }).populate('galaxy')
     
        return galaxy
    }
    
    async createPlanet(planetData) {
        const newPlanet = await dbContext.Planets.create(planetData)
        return newPlanet
    }
    
    async getPlanet(query){
        const Planet = await dbContext.Planets.find(query)
        return Planet
    }

  

    
    
    }
    
    export const planetService = new PlanetService()