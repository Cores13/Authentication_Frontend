import { toast } from 'react-toastify';
import { ErrorResponseDto } from '../api/api';
import { error } from 'console';

const defaultErrorHandler = (errorResponse: ErrorResponseDto) => {
  // console.log('ERROR RESPONSE', errorResponse);
  // const messageDetailError = errorResponse?.detail;
  const formDetailErrors = errorResponse?.errors;
  // if (messageDetailError) {
  //   toast.error(messageDetailError);
  // }

  if(formDetailErrors){
    for (const [field, errorMessageObj] of Object.entries(formDetailErrors) as any) {
      toast.error(errorMessageObj.message);
    }    
  }
};

const formErrorHandler = (
  formErrors: ErrorResponseDto | null,
  field: string
) => {
  
  // errors -> object(s) with code & message keys
  
  // if (!formErrors || formErrors.message !== 'ValidationErrors') {
  //   return undefined;
  // }

  // const foundField = formErrors.errors?.find(
  //   (x) => x.field?.toLowerCase() === field.toLowerCase()
  // );

  // return foundField;


};

export { defaultErrorHandler, formErrorHandler };