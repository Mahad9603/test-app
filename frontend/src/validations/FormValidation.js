import * as yup from "yup";
import axiosInstance from "../axios/axios.js"
const signupSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup
        .string()
        .required("Email is required")
        .email("Please enter valid email").test("checkEmailExists", "Email already exists", async function (value) {
            try {
                const response = await axiosInstance.get(`http://localhost:3000/users`);
                const users = response.data.data;

                // Check if any user already has this email
                const emailExists = users.some(user => user.email === value);

                // Return true if email doesn't exist, false if it does
                return !emailExists;
            } catch (error) {
                console.error("Error checking email:", error);
                return true; // Assume email exists if there's an error (fallback behavior)
            }
        }),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Password must contain at least one special character"
        ),
});




const loginSchema = yup.object({
    email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email")
        .test("checkEmailExists", "Email does not exist. Please sign up!", async function (value) {

            const response = await axiosInstance.get(`http://localhost:3000/users`);
            const users = response.data.data;

            // Check if any user already has this email
            const emailExists = users.some(user => user.email === value);

            // Return true if email exists, false if it doesn't
            return emailExists;

        }),
    password: yup.string().required("Password is required"),
});

export { loginSchema };

export default signupSchema;