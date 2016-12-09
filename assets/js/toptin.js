$(document).ready(function() {

	// Checking after every 1 second if PushCrew opt-in modal is loaded.
	// Interval is used for those users who have set the opt-in delay to variable seconds.
    var pc_modal = setInterval(function() { 
    	if($('.pushcrew-chrome-style-notification')){
    		clearInterval(pc_modal);
    		trackPcModal();
    	}
    }, 1000);

    function trackPcModal(){
    	ga('send','event','pc-mod','pc-mod-visible','pc-opt-in',{
    		'metric1': 1
    	})
    }
});
