
    <script>

		// Service Worker add
		if('serviceWorker' in navigator){
            navigator.serviceWorker.register('/static/modules/stays/serviceWorker.js').then(function (result) {
                console.log("Serviceworker Registered");
                console.log("Scope : " + result.scope);
            }, function (error) {
                console.log("Serviceworker Registration Failed");
                console.log(error);
            });
        }else  console.log("Serviceworker Not Supported");
        

        // Load JS in page ready
        function ready(fn) {
            if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading")  fn();
            else document.addEventListener('DOMContentLoaded', fn);
        }

        ready(function () {

            {#Font#}
            var f = document.createElement('script');
            f.src = src='https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
            f.async = true;
            document.head.insertBefore(f, document.head.childNodes[document.head.childNodes.length - 1].nextSibling);
        });
    </script>