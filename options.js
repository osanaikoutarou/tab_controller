function restore_options() {
  // // Use default value color = 'red' and likesColor = true.
  // chrome.storage.sync.get({
  //   favoriteColor: 'red',
  //   likesColor: true
  // }, function(items) {
  //   document.getElementById('color').value = items.favoriteColor;
  //   document.getElementById('like').checked = items.likesColor;
  // });
//  document.write("a");
    chrome.windows.getAll({ populate:true},function(windows) {
        windows.forEach(function(window){
            window.tabs.forEach(function(tab){
                document.writeln(tab.title + "</br>");
            })
        })
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
