/*
Copyright (c) 2021, Sergio Ponce De Leon
All rights reserved.

This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree.
*/

// content.js
chrome.runtime.onMessage.addListener(
   function (request, sender, sendResponse) {
      if (request.message === "clicked_browser_action") {
         var firstHref = $("a[href^='http']").eq(0).attr("href");

         console.log(firstHref);

         // This line is new!
         chrome.runtime.sendMessage({ "message": "open_new_tab", "url": firstHref });
      }
   }
);