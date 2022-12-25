import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function passwordMatching(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    const password = control.get("password")
    const repeatPassword = control.get("repeatPassword")

    return (password?.value === repeatPassword?.value)? null: {passwordNotMatching: {value:true}}
  };
}