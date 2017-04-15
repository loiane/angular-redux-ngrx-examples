import { FormGroup } from '@angular/forms';

export class PasswordValidator {

    static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): {
            [key: string]: any
        } => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            // Don't kick in until user touches both fields   
            if (password.pristine || confirmPassword.pristine) {
                return null;
            }

            // Mark group as touched so we can add invalid class easily
            group.markAsTouched();

            if (password.value === confirmPassword.value) {
                return null;
            }

            return {
                isValid: false
            };
        }
    }
}