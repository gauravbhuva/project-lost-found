import multer from "multer";
import path from "path";

// memory storage (good for Cloudinary, S3, etc.)
const storage = multer.memoryStorage();

const createUploader = (allowedExtensions = []) => {
  const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error(`Only ${allowedExtensions.join(", ")} files are allowed`), false);
    }
  };

  return multer({ storage, fileFilter });
};

export default createUploader;
