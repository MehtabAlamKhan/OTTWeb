import Joi from "@hapi/joi";

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(4).max(20).messages({
      "string.min": `Username must contain at least 4 characters`,
      "string.max": `Username should have maximum of 20 characters`,
    }),
    email: Joi.string()
      .min(6)
      .message("Invalid Email")
      .required()
      .email()
      .message("Invalid Email"),
    password: Joi.string().min(6),
  });
  return schema.validate(data);
};

export default registerValidation;
