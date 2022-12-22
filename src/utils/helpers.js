// helper function to check if value is in a format of email using regex
export function validEmail(email) {
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return emailRegex.text(String(email));
}


