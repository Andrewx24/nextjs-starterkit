declare global {
    interface Window {
        currentUser: {
            name: string;
            email: string;
            isLoggedIn: boolean;
        }
    }
    // For non-window globals
    var globalApiKey: string;
}

export {} // Makes this a module