import { check } from "express-validator";

export const registerSchema = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email"),

  check("userName")
    .trim()
    .notEmpty()
    .withMessage("username is required")
    .isAlpha()
    .withMessage("username must contain only letters"),

  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/\d/)
    .withMessage("Password must contain at least one number")
    .matches(/[@$!%*?&]/)
    .withMessage(
      "Password must contain at least one special character (@, $, !, %, *, ?, &)"
    ),
];

export const updateUserSchema = [
  check("email")
    .trim()
    .optional()
    .isEmail()
    .withMessage("Must be a valid email"),

  check("firstName")
    .trim()
    .optional()
    .isAlpha()
    .withMessage("First name must contain only letters"),

  check("lastName")
    .trim()
    .optional()
    .isAlpha()
    .withMessage("Last name must contain only letters"),

  check("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  check("phoneNumber")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^[0-9]{10,15}$/)
    .withMessage("Phone number must be 10–15 digits"),

  check("street").trim().notEmpty().withMessage("Street is required"),

  check("city")
    .trim()
    .optional()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("City must contain only letters and spaces"),

  check("state")
    .trim()
    .optional()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("State must contain only letters and spaces"),

  check("zipCode")
    .trim()
    .optional()
    .matches(/^[0-9]{4,10}$/)
    .withMessage("Zip code must be 4–10 digits"),

  check("country")
    .trim()
    .optional()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Country must contain only letters and spaces"),
];

export const subjectSchema = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Subject name is required")
    .isLength({ min: 2 })
    .withMessage("Subject name must be at least 2 characters long"),
  check("description")
    .trim()
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description can be up to 500 characters long"),
  check("status")
    .trim()
    .optional({ checkFalsy: true }) // ✅ skip if undefined, null, or empty string
    .isIn(["Active", "Inactive"])
    .withMessage("Status must be either active or inactive"),
];

export const lostThingSchema = [
  check("itemName")
  .trim()
  .notEmpty()
  .withMessage("item name is required."),

  check("category")
  .notEmpty()
  .withMessage("category is required."),

  check("description")
  .optional()
  
];
