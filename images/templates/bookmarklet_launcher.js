(function () {
    if (window.myBookmarklet !== undefined) {
        myBookmarklet();
    }
    else {
        document.body.appendChild(
            document.createElement('script')
    ).src='https://3b95-128-0-105-226.eu.ngrok.io/static/js/bookmarklet.js?r=' 
        + Math.floor(Math.random()*99999999999999999999);
    }
})();