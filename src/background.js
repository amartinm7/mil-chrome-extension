chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'notification1') {
        console.log("notification is done!" + JSON.stringify(sender))
        const options = {
            type: "basic",
            title: "My notification",
            message: "hello world",
            iconUrl: "icons/icon_128.png"
        }
        chrome.notifications.create(options, function () {
            console.log("notification is done!" + JSON.stringify(sender))
        })
    }
});

/*
//manifest
"permissions": [
    "tabs",
    "storage"
]
//storage something
chrome.storage.sync.set({ response }, () => {});

chrome.storage.sync.get(['response'], (result) => {
    populateIngredients(result.response);
});

//background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchIngredients') {
        const recipeName = document.querySelector('.recipe-name').innerText;
        const ingredients = Array.from(document.querySelectorAll('.ingredient')).map(ingredient => ingredient.innerText);

        sendResponse({ recipeName, ingredients });
    }
});

//tab.js
document.querySelector('.import').addEventListener('click', () => {
    chrome.tabs.sendMessage(tab.id, { action: 'fetchIngredients' }, response => {
        console.log(response);
    });
});
*/
