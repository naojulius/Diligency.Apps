import { applicationErrorSchema } from "./error.schema";
import { applicationFormSchema } from "./form.schema";
import { applicationIntroductionSchema } from "./introduction.schema";
import { applicationSuccessSchema } from "./success.schema";


export const applicationData = [
    applicationIntroductionSchema,
    applicationFormSchema,
    applicationSuccessSchema,
    applicationErrorSchema,
]