import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("username is required")
        .min(2, "Name must be at least two characters"),
    pepperoni: yup.boolean(), 
    cheese: yup.boolean(),
    mushroom: yup.boolean(),
    pepper: yup.boolean(),
});