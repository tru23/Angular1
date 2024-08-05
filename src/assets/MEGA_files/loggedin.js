/**
 * Scripting for the loggedin endpoint which allows webclient to provide megapages with basic user details.
 */

// Expected webclient URL (constant so easier to change for local testing)
const webclientUrl = 'https://mega.nz';

function isSessionStorageAvailable() {
    try {
        sessionStorage.setItem('test.ss', '1');
        const isAvailable = sessionStorage.getItem('test.ss') === '1';
        sessionStorage.removeItem('test.ss');

        return isAvailable;
    }
    catch (e) {
        return false;
    }
}

function clearUser() {
    sessionStorage.removeItem('userFirstName');
    sessionStorage.removeItem('userAvatar');
    sessionStorage.removeItem('userAvatarColourKey');
    sessionStorage.removeItem('userPlanNum');
    console.info('[megapages] Previous user details cleared, if they existed.');
}

function setUser(firstName, planNum, customAvatar, avatarColourKey) {
    console.info(`[megapages] Setting user details. firstName: "${firstName}".`);

    sessionStorage.setItem('userFirstName', firstName);

    // Set optional params if available
    if (planNum !== -1) {
        sessionStorage.setItem('userPlanNum', planNum);
    }
    if (customAvatar) {
        sessionStorage.setItem('userAvatar', customAvatar);
    }
    if (avatarColourKey) {
        sessionStorage.setItem('userAvatarColourKey', avatarColourKey);
    }
}

// Listen for an iframe message from webclient
window.addEventListener('message', (event) => {
    // Security check to make sure the message came from webclient
    if (event.origin !== webclientUrl) {
        console.warn(`[megapages] loggedin endpoint received iframe message from unexpected origin: "${event.origin}". Expected "${webclientUrl}".`);
        window.parent.postMessage(false, webclientUrl);
        return;
    }

    if (!isSessionStorageAvailable()) {
        console.warn('[megapages] Unable to write and read to sessionStorage. Cannot set user details.');
        window.parent.postMessage(false, webclientUrl);
        return;
    }

    // Clear any existing details in case loggedin endpoint was invoked again
    // with a different user and without loggedout endpoint invocation.
    clearUser();

    // Get the message event data or use a default
    const firstName = event.data.firstName || '';
    const planNum = event.data.planNum || -1;
    const avatar = event.data.avatar || '';
    const avatarColourKey = event.data.avatarColourKey || 1;

    if (!firstName) {
        console.error('[megapages] No first name received from webclient in the iframe message data. Ignoring.');
        window.parent.postMessage(false, webclientUrl);
        return;
    }

    setUser(firstName, planNum, avatar, avatarColourKey);
    console.log('[megapages] User details received from webclient and saved. Sending receipt.');
    window.parent.postMessage(true, webclientUrl);
});

console.info("[megapages] loggedin endpoint ready and waiting for webclient's iframe message.");
