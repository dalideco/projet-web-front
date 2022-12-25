import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function passwordVerif(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    const verifications = {
      hasMaj: false,
      hasMin: false,
      hasSpecial: false,
      hasNumber: false,
    };

    for (const letter of [...value]) {
      if (["!",":","^","$"].includes(letter)) {
        verifications.hasSpecial=true;
      } else if (isNumber(letter)) {
        verifications.hasNumber = true;
      } else if (letter.toUpperCase() === letter) {
        verifications.hasMaj = true;
      } else if (letter.toLowerCase() === letter) {
        verifications.hasMin = true;
      }

      if (
        verifications.hasMaj &&
        verifications.hasMin &&
        verifications.hasSpecial &&
        verifications.hasNumber
      ) {
        console.log('returning null');
        return null;
      }
    }
    return { passwordIncomplete: { value } };
  };
}

function isNumber(char: string) {
  if (typeof char !== 'string') {
    return false;
  }

  if (char.trim() === '') {
    return false;
  }

  //@ts-ignore
  return !isNaN(char);
}
