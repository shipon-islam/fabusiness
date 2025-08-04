import * as yup from "yup";
const FILE_SIZE = 1024 * 1024; // 1MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
export const feedbackYupSchema = yup
  .object({
    clientName: yup.string().min(0).required("Client name is required"),
    clientPosition: yup.string().min(0).required("Client position is required"),
    rating: yup
      .number()
      .required("Rating is required")
      .min(1, "Rating must be at least 1")
      .max(5, "Rating can't be more than 5"),
    feedback: yup
      .string()
      .required("Feedback is required")
      .min(5, "feedback must be at least 5 character"),
    image: yup
      .mixed()
      .required("Image is required")
      .test("fileType", "Unsupported File Format", (value) => {
        return value && value[0] && SUPPORTED_FORMATS.includes(value[0].type);
      })
      .test("fileSize", "File too large", (value) => {
        return value && value[0] && value[0].size <= FILE_SIZE;
      }),
  })
  .required();
