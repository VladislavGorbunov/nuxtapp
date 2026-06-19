import { sequelize, db } from '../../../lib/db'
import { QueryResult } from 'mysql2'
import Region from '../../../models/region'


export default defineEventHandler(async (event) => {
    const regionSlug = getRouterParam(event, 'name')
    const region = await Region.findOne({ where: { slug: regionSlug }, raw: true });
    return region
})