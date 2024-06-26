(function(){
    function isOffline(){
        popup_heading.innerHTML="No internet Connection";
        popup_paragraph.innerHTML="You are Offline Check your Connection.";
        internet_status_check.className="offline";

    }
    function isOnline(){
        popup_heading.innerHTML="Back to online";
        popup_paragraph.innerHTML="You are online.";
        internet_status_check.className="online";

    }
    setTimeout(function(){
        internet_status_check.classList.remove("online");

    },3000)
    
 
    window.addEventListener('offline', isOffline, false);
    window.addEventListener('online', isOnline, false);
})();