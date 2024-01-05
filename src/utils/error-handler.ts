import { toast } from 'react-toastify';
import { ErrorResponseDto } from '../api/api';

const defaultErrorHandler = (errorResponse: ErrorResponseDto) => {
  console.log('ERROR RESPONSE', errorResponse);
  const messageError = errorResponse?.message;

  if (messageError) {
    toast.error(messageError);
  } else {
    toast.error('Oops! Something went wrong.');
  }
};

const formErrorHandler = (
  formErrors: ErrorResponseDto | null,
  field: string
) => {
  if (!formErrors || formErrors.message !== 'ValidationErrors') {
    return undefined;
  }

  const foundField = formErrors.errors?.find(
    (x) => x.field?.toLowerCase() === field.toLowerCase()
  );

  return foundField;
};

export { defaultErrorHandler, formErrorHandler };