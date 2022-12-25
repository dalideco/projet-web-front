import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function passwordMatching(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    const passowrd = control.get("password")
    const repeatPassword = control.get("repeatPassword")

    return (passowrd === repeatPassword)? null: {passwordNotMatching: {value:true}}
  };
}