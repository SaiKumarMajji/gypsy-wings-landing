
import { errorMessage } from './errorMessages';
import { successMessage } from './successMessages';


export function getErrorMessage(code: string) {
  const errorMsg = errorMessage[code] && errorMessage[code].message;
  return errorMsg;
}

export function getSuccessMessage(code: string) {
  const successMsg = successMessage[code] && successMessage[code].message;
  return successMsg;
}
