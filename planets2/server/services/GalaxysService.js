import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { Query } from "mongoose"

class GalaxysService {
async createGalaxy(galaxyData) {
    const newGalaxy = await dbContext.Galaxy.create(galaxyData)
    return newGalaxy
}

async getGalaxy(query){
    const galaxy = await dbContext.Galaxy.find(query)
    return galaxy
}


}

export const galaxysService = new GalaxysService()