import {z} from "zod";

//zod schema
export const userSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  message: z.string().min(6, { message: "Message must be greater than 6 character" }),
})

//general validator factory function which work with all three schema(we pass schema as parameter)
const createValidator = (schema) => (req, res, next) =>{
  const createPayload = req.body;
  const parsePayload = schema.safeParse(createPayload);
  
  if (!parsePayload.success) {
    const errors = parsePayload.error.errors.map(err => ({
      field: err.path[0],
      message: err.message,
    }));

    return res.status(400).json({ 
      success: false,
      errors 
    });
  }

  //Pass validated data to next middleware or route
  req.validatedData = parsePayload.data;
  next();
}

// Export validators
export const validateUser = createValidator(userSchema);

//Note = these middleware ensure all the inputs(req.body) field provided by the user are correct