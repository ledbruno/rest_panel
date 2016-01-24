Logger.debug("chorme background script loaded");
var pageSessionStorage = new Array();
chrome.storage.sync.set({"zambas": pageSessionStorage}, function() {
    console.log("stored:" + pageSessionStorage);
});

chrome.webRequest.onBeforeRequest.addListener(
       function(details) {
           Logger.debug("url:" + details.url);
           pageSessionStorage.push(details.url);
       },
{urls: ["<all_urls>"]}, ["blocking"]);

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
   console.log("tab reloaded");
   if (changeInfo.status == "complete") {
      /*chrome.storage.sync.set({"zambas": pageSessionStorage}, function() {
          console.log("stored:" + pageSessionStorage);
      });*/
      //pageSessionStorage = new Array();
   }
});

//var endpoints = localStorage.getItem("restMockery.endpoints")
console.log("eof");
