import { validateBody } from "./validateBody.middleware";
import { handleErrors } from "./handleErrors.middleware";
import { verifyIdExists } from "./verifyIdExists.middleware";
import { verifyNameExists } from "./verifyNameExists.middleware";
import { pagination } from "./pagination.middleware";

export default { validateBody, handleErrors, verifyIdExists, verifyNameExists, pagination };