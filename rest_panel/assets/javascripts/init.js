Logger.debug("init.js");
$(function() {
  //Logger.debug("lalala");
  // Initializes UI
  //
  var uiInit = function () {
    Logger.debug('foo');
    $('#tabs').tabs();
    $('.stupidtable').stupidtable();
    dividers.init();
    Logger.debug("after ui init");
  };

  // Checks if the panel is in the standalone (mock data) mode
  //
  var isStandaloneMode = function() {
    return typeof chrome.devtools == 'undefined';
  };

  // get the scope
  //
  var scope = angular.element('.split-view').scope();

  //
  // Here we go ...
  //

  uiInit();
  key('⌘+k, ctrl+l', function(){ panel.clearData(scope) });

  new TransactionsCtrl(scope);   // wire angular controller

  if (isStandaloneMode()) {      // add mock data if standalone ...
    panel.addMockData(scope);
  } else {                       // ... or bind a listener for incoming requests

  }

});
