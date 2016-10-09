(function($) {

    $.fn.jpsp = function(options) {

        // First things first!
        // $("body").prepend("<div class=\"pc-segment\"><div class=\"segments\" id=\"segments\"></div><div class=\"pc-icon-wrapper\"><div class=\"pc-icon\"></div></div></div>");

        window._pcq = window._pcq || [];
        _pcq.push(['noTrigger', true]); //disables automatic opt-in

        // creating a segs array that will receive segment options from call
        var segs = [];

        // filling this segment array with the received options
        var settings = $.extend({}, options);

        // Putting all segment values in segs array
        segs = settings.segments.split(",");
        var segsLength = segs.length;
        console.log(segs);

        var inputType = settings.inputType;
        console.log(inputType);

        // #segments
        var target = $(this);

        target.append("<p class=\"pc-sub-text\">" + settings.subText + "</p>");

        // Checkboxes would only be generated for than one segments.
        if (segsLength > 1) {
            for (i = 0; i < segsLength; i++) {
                console.log(target);

                target.append("<label for=\"" + segs[i] + "\"><input type =\"" + inputType + "\" name=\"segs\" id=\"" + segs[i] + "\" value=\"" + segs[i] + "\">" + segs[i] + "</label>")
            }
        }


        target.append("<div class=\"pc-sub-btn\"><button>Subscribe!</button></div>");

        if (target.css("display") == "none") {
            // Showing segments only on click
            $(".pc-icon-wrapper").on("click", function() {
                target.slideToggle(200);
            });
        }

        var pcSubBtn = $(".pc-sub-btn");


        if (segsLength > 1) {
            pcSubBtn.on("click", pcSubBtnClickedMultiSeg);
        } else if (segsLength == 1) {
            pcSubBtn.on("click", pcSubBtnClickedNoSeg);
        }

        function pcSubBtnClickedMultiSeg() {
            // e.preventDefault();
            console.log("multi btn clicked");

            if ($("#segments input:" + inputType + ":checked").length > 0) {

                console.log("input method is" + inputType);
                // Triggering opt-in and opens the native opt-in prompt
                _pcq.push(['triggerOptIn', { httpWindowOnly: true }]);
                _pcq.push(['subscriptionSuccessCallback', segSubscriptionSuccess]); //registers callback function to be called when user gets successfully subscribed
                _pcq.push(['subscriptionFailureCallback', segSubscriptionFailure]); //registers callback function to be called when user subscription failed

            } else {

                alert("Select a segment.");

            }
        }



        function segSubscriptionSuccess(subscriberId, values) {
            console.log(subscriberId);
            console.log(values.status);
            console.log(values.message);

            // creating an array to store all selected segments by user
            var segSelectedArray = [];
            $("#segments input:" + inputType + ":checked").each(function() {
                segSelectedArray.push($(this).val());
            });
            console.log(segSelectedArray);

            _pcq.push(['APIReady', addToSegment]); //Registering function to run on API load
            if (pushcrew.isAPIReady) {
                console.log('API is ready');
            }

            for (i = 0; i < segSelectedArray.length; i++) {
                // Calling function to add to segment
                addToSegment(segSelectedArray[i]);
            }
        } // segSubscriptionSuccess ended

        function segSubscriptionFailure(values) {
            console.log(values.status);
            console.log(values.message);
        }


        function addToSegment(segSelected) {
            console.log(segSelected);
            return _pcq.push(['addSubscriberToSegment', segSelected, addToSegmentResponse]);
        }

        function addToSegmentResponse(response) {
            console.log(response);
        }

        function pcSubBtnClickedNoSeg() {
            console.log("no seg btn clicked");
            // Triggering opt-in and opens the native opt-in prompt
            _pcq.push(['triggerOptIn', { httpWindowOnly: true }]);
            _pcq.push(['subscriptionSuccessCallback', noSegSubscriptionSuccess]); //registers callback function to be called when user gets successfully subscribed
            _pcq.push(['subscriptionFailureCallback', noSegSubscriptionFailure]); //registers callback function to be called when user subscription failed
        }

        function noSegSubscriptionSuccess(subscriberId, values) {
            console.log(subscriberId);
            console.log(values.status);
            console.log(values.message);
        }

        function noSegSubscriptionFailure(values) {
            console.log(values.status);
            console.log(values.message);
        }

    };

}(jQuery));
