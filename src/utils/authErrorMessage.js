export default function (errorCode) {
    switch (errorCode) {
        case "auth/invalid-email":
            return "You entered an invalid email address.";

        case "auth/email-already-exists":
            return "auth/email-already-exists.";

        case "auth/user-not-found":
            return "User not found.";

        default:
            return errorCode;
    }
}