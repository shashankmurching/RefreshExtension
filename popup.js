let refreshRate = 0;

var refreshClock = {
  onHandler: function(e) {
    let val = document.getElementById('refresh-rate').value;
    if (val !== '') {
      refreshRate = (parseInt(val) / 60);
      chrome.alarms.create("refreshClock", {delayInMinutes: 0.1, periodInMinutes: refreshRate});
    }
    window.close();
  },

  offHandler: function(e) {
    chrome.alarms.clear("refreshClock");
    window.close();
  },

  setup: function() {
    const startRefreshButton = document.getElementById('start-refresh');
    const stopRefreshButton = document.getElementById('stop-refresh');

    startRefreshButton.addEventListener('click', refreshClock.onHandler);
    stopRefreshButton.addEventListener('click', refreshClock.offHandler);
  }
};

document.addEventListener('DOMContentLoaded', function() {
  refreshClock.setup();
}, false);
