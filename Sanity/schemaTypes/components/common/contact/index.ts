import { errorsSchema } from "./errors.schema";
import { formSchema } from "./form.schema";
import { typeSchema } from "./type.schema";

export const form = [formSchema, typeSchema, errorsSchema]