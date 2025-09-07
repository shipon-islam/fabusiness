import * as Yup from "yup";
const SUPPORTED_FORMATS = ["application/pdf", "image/jpeg", "image/jpg"];
export const contactYupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Fullname is required") // min(1) instead of min(0) to ensure non-empty
    .required("Fullname is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  phone: Yup.string()
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});
