import cloudinary from "../config/cloudinary.config.js";
import streamifier from "streamifier";
import AppError from "../utils/apiError.js";

const uploadToCloudinary = async (fileBuffer, folder, originalName) => {
  try {

    let resource_type = "image"; // default
    const baseName = originalName
      ? originalName.replace(/\.[^/.]+$/, "")
      : "file";

    // Extract file extension
    const ext = originalName ? originalName.split(".").pop().toLowerCase() : "";

    // Add timestamp to filename for uniqueness
    const timestamp = Date.now();
    const public_id = `${baseName}_${timestamp}.${ext}`;

    if (originalName) {

      if (ext === "pdf" || ext === "doc" || ext === "docx" || ext === "txt") {
        resource_type = "raw";
      }
    }

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type,
          public_id, // now includes timestamp
          overwrite: false, // avoid overwriting
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      // convert buffer to stream and pipe into Cloudinary
      streamifier.createReadStream(fileBuffer).pipe(uploadStream);
    });

    return result; // contains secure_url, public_id, etc.
  } catch (error) {
    if (error instanceof AppError) {
      throw error; // rethrow known app error
    }
    console.log("===> Cloudinary Upload Error:", error);

    throw new AppError(500, "Failed to upload document to Cloudinary.");
  }
};

export default uploadToCloudinary;
