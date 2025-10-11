
import lostThingRepo from '../repository/lostThingRepository.js'
import uploadToCloudinary from "./imageUploader.js";

const create = async(data,userId) => {

    let image = ""

      if (data.file) {
    const folder = process.env.CLOUDINARY_FOLDER;

    const result = await uploadToCloudinary(
      data.file.buffer,
      folder,
      data.file.originalname
    );
    image = result.secure_url;
    data.image = image
  }

  delete data.file

  const result = await lostThingRepo.create({...data,founderId:userId})

  return result;
}

const getAll = async(filters = {}) => {
    return await lostThingRepo.getAllLostThings(filters)
}

const updateItem = async(id,data) =>{
    return await lostThingRepo.updateItem(id,data)
}

export default {
    create,
    getAll,
    updateItem
}