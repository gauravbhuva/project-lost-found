import prisma from "../lib/prismaClient.js";

const create = async(payload) =>{
 const result =   await prisma.lostThings.create({
        data:payload
    })

    return result
}

const getAllLostThings = async (filters = {}) => {
  const where = {};

  if(filters.search) where.OR = [
    {itemName:{contains:filters.search,mode:"insensitive"}},
    {description:{contains:filters.search,mode:"insensitive"}}
  ]
  if (filters.category) where.category = filters.category;
  if (filters.foundDate) where.foundDate = new Date(filters.foundDate);
  if(filters.startDate && filters.endDate){
    where.foundDate = {
        gte:new Date(filters.startDate),
        lte:new Date(filters.endDate)
    };
  }

  return prisma.lostThings.findMany({
    where,
    include: { user: false },
    orderBy: { createdAt: 'desc' },
  });
};

export default {
    create,
    getAllLostThings
}