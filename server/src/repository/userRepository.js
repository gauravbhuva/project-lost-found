import prisma from "../lib/prismaClient.js";

const createUser = async (userData) => {
  return await prisma.user.create({
    data: userData
  });
}

const getUserByIdOrEmail = async (identifier) => {
  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(identifier);

  const user = await prisma.user.findUnique({
    where: isUUID ? { id: identifier } : { email: identifier },
    include: {
      Tutors:true,
      loginHistories: {
        orderBy: { createdAt: 'desc' },
        take: 1,
      },
      role: {
        select: {
          id: true,
          name: true,
        },
      },
      addresses: true,
    },
  });

  if (user) {
    return { ...user, lastLogin: user?.loginHistories[0]?.createdAt || null, }
  }

  return user

};


const getAllUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      profileImage: true,
      isVerified: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
      addresses: true,
      role: {
        select: {
          id: true,
          name: true
        }
      },
      loginHistories: {
        select: {
          createdAt: true,
        },
        orderBy: { createdAt: 'desc' },
        take: 1,
      },
      
    }
  });
}

const updateUser = async (id, data) => {
  const { userData, addressData } = data

  return await prisma.user.update({
    where: { id },
    data: {
      ...userData,
      addresses: addressData && Object.keys(addressData).length > 0
        ? {
          upsert: {
            where: { userId: id },
            update: addressData,
            create: addressData,
          },
        }
        : undefined,
    },
    include: { addresses: true, role: true },
  });
};

const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id } });
};

export default {
  createUser,
  getUserByIdOrEmail,
  getAllUsers,
  updateUser,
  deleteUser,
};