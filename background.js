/*
Copyright (c) 2021, Sergio Ponce De Leon
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
   // Send a message to the active tab
   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
   });
});

// This block is new!
chrome.runtime.onMessage.addListener(
   function (request, sender, sendResponse) {
      if (request.message === "open_new_tab") {
         chrome.tabs.create({ "url": request.url });
      }
   }
);