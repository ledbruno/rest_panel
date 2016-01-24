var Logger = function(){
};

Logger.debug = function(msg) {
    if(chrome.devtools){
      chrome.devtools.inspectedWindow.eval('console.log("' + msg +'")');
    }else{
      console.log(msg);
    }

};
