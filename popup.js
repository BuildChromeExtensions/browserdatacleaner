

// https://developer.chrome.com/docs/extensions/reference/api/browsingData
document.querySelector('form').onsubmit = function (e) {
    e.preventDefault();

    const date = e.target.date.value;
    const since = new Date(date).getTime();

    const appcache = e.target.appcache.checked;
    const cache = e.target.cache.checked;
    const cacheStorage = e.target.cacheStorage.checked;
    const cookies = e.target.cookies.checked;
    const downloads = e.target.downloads.checked;
    const fileSystems = e.target.fileSystems.checked;
    const formData = e.target.formData.checked;
    const history = e.target.history.checked;
    const indexedDB = e.target.indexedDB.checked;
    const localStorage = e.target.localStorage.checked;
    const passwords = e.target.passwords.checked;
    const serverBoundCertificates = e.target.serverBoundCertificates.checked;
    const serviceWorkers = e.target.serviceWorkers.checked;
    const webSQL = e.target.webSQL.checked;

    const options = {
        since: since,
    };

    // what kind of browser data
    const dataToRemove = {
        appcache: appcache,
        cache: cache,
        cacheStorage: cacheStorage,
        cookies: cookies,
        downloads: downloads,
        fileSystems: fileSystems,
        formData: formData,
        history: history,
        indexedDB: indexedDB,
        localStorage: localStorage,
        passwords: passwords,
        serverBoundCertificates: serverBoundCertificates,
        serviceWorkers: serviceWorkers,
        webSQL: webSQL,
    };

    //remove browsering data
    chrome.browsingData.remove(options, dataToRemove, () => {
        alert("Browsing data cleared");
    });
}