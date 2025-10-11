import tryCatchAsync from "../utils/tryCatchAsync.js";
import lostThingService from "../services/lostThingService.js";
import {
  notFoundResponse,
  successResponseWithData,
  validationError,
} from "../utils/apiResponse.js";

const create = tryCatchAsync(async (req, res) => {
  let data = req.body;

  const userId = req.user.id;

  if (req.file) {
    data.file = req.file;
  }
  const result = await lostThingService.create(data, userId);

  return await successResponseWithData(res, "item added successfully.", result);
});

const getAll = tryCatchAsync(async (req, res) => {
  const filters = req.query;

  const data = await lostThingService.getAll(filters);

  return successResponseWithData(res, "Data found.", data);
});

const updateItem = tryCatchAsync(async (req, res) => {
  const id = req.params.id;

  if (!id) return validationError(res, "item id is required!");


  

  const result = await lostThingService.updateItem(id, req.body);

  return successResponseWithData(res,"item updated successfully.",result)
});

export default {
  create,
  getAll,
  updateItem
};
