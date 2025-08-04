import * as yup from "yup";
const FILE_SIZE = 2 * 1024 * 1024; // 2MB
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/webp",
];
export const blogYupSchema = (isEditMode) =>
  yup
    .object({
      title: yup
        .string()
        .min(5, "minimum 3 character")
        .required("title is required"),
      content: yup
        .string()
        .min(10, "minimum 10 character")
        .required("Content is required"),
      image: yup
        .mixed()
        .test("required", "Image is required", (value) => {
          if (isEditMode) {
            return true;
          }
          return value && value.length > 0;
        })
        .test("fileSize", "File too large", (value) => {
          if (isEditMode) {
            return true;
          }
          if (!value || !value[0]) return true;
          return value[0].size <= FILE_SIZE;
        })
        .test("fileFormat", "Unsupported Format", (value) => {
          if (isEditMode) {
            return true;
          }
          if (!value || !value[0]) return true;
          return SUPPORTED_FORMATS.includes(value[0].type);
        }),
    })
    .required();
