$( document ).ready(function() {
    $(".copy-link").click(function(){
        var temp = $("<input>");
        $("body").append(temp);
        temp.val("https://www.realmofthemadgod.com/client").select();
        document.execCommand("copy");
        temp.remove();
        $(".copy-link").text("(Copied!)")
    });
});