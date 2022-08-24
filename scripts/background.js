chrome.runtime.onInstalled.addListener(async () => {
    let vars = await chrome.storage.sync.get(['linkColor', 'font', 'heartsNotStars', 'linkColorsInTL', 'enableTwemoji', 'chronologicalTL', 'showTopicTweets']);
    if(typeof(vars.linkColorsInTL) !== 'boolean') {
        chrome.storage.sync.set({
            linkColorsInTL: true
        }, () => {});
    }
    if(typeof(vars.enableTwemoji) !== 'boolean') {
        chrome.storage.sync.set({
            enableTwemoji: true
        }, () => {});
    }
    if(typeof(vars.chronologicalTL) !== 'boolean') {
        chrome.storage.sync.set({
            chronologicalTL: true
        }, () => {});
    }
    if(typeof(vars.showTopicTweets) !== 'boolean') {
        chrome.storage.sync.set({
            showTopicTweets: true
        }, () => {});
    }
});