"use strict";

module.exports = Franz => {
  const getMessages = () => {
    var direct = 0;
    var indirect = 0;

    // "Notifications" and "Messages" - aria-label ending in
    // "unread items". Sum the values for direct badge.
    [].forEach.call(
      document.querySelectorAll('[aria-label$="unread items"]'),
      function (el) {
        direct += parseInt(el.innerHTML);
      }
    );

    // New tweets check - aria-label contains "New unread Tweets".
    const NTelement = document.querySelector('[aria-label*="New unread Tweets"]');
    if (NTelement !== null) {
      indirect = 1;
    }  
    //console.log("direct="+direct);
    //console.log("indirect="+indirect);

    Franz.setBadge(direct,indirect);
  };

  Franz.loop(getMessages);

};