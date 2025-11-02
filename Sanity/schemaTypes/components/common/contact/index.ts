import { errorsSchema } from "./errors.schema";
import { formSchema } from "./form.schema";
import { infoSchema } from "./info.schema";
import { socialSchema } from "./social.schema";
import { typeSchema } from "./type.schema";

export const form = [formSchema, typeSchema, errorsSchema, infoSchema, socialSchema]