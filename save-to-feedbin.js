javascript:void(function() { 
  var script = document.createElement("script");
  var body = document.querySelector("body");
  var title = document.title; 
  document.title = "Sending to Feedbin: " + title; 
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://feedbin.com/bookmarklet/replace_me".replace("replace_me", Date.now());
  script.setAttribute("data-feedbin-token", "FEEDBIN_TOKEN");
  script.setAttribute("data-original-title", title);
  script.onerror = function() {};
  window.location = "https://feedbin.com/pages?url=" + encodeURIComponent(window.location.href) + "&title=" + encodeURIComponent(title) + "&page_token=bbf07c83a9398b7bd1ff950850f02aa3";
  document.title = title; 
  body.appendChild(script)
})();
