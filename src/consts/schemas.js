import * as yup from "yup";
import {
  checkLengthTitle,
  checkNumsExpression,
} from "../global/functions/regex";
export const FormSchema = yup.object({
  title: yup
    .string()
    .required()
    .test("len-4", "Title Must Contains 4 chars", (val) => {
      return checkLengthTitle.test(val);
    }),
  amount: yup
    .string()
    .required()
    .test("is-num", "Amount Must Be Number ", (val) => {
      return checkNumsExpression.test(val);
    }),
  period: yup
    .string()
    .required()
    .test("is-num", "Period Must Be Number ", (val) => {
      return checkNumsExpression.test(val);
    }),
});
