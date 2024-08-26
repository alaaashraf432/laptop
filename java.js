

$(document).ready(function () {
    $("#btn1").click(function () {
      $("#content1").toggle(1000);
      $("#content1").show(2000);
  
      $("#title").append("info");
    });
  });
  

  $(document).ready(function () {
    $("#dark1").click(function () {
      if ($(this).text() === "Dark") {
        $(this).text("Light");
      } else {
        $(this).text("Dark");
      }
      $("body").toggleClass("dark-mode light-mode");
    });
  });
  
  $("#img").click(function () {
    $("html , body ").animate({ scrollTop: 0 }, 500);
  });
  
  $(document).ready(function () {
    $("#my-form").submit(function (event) {
      var isvalid = true;
      $(".error").hide();
  
      if ($("#name").val().trim() === "") {
        $("#name-error").show();
        isvalid = false;
      }
  
      if ($("#email").val().trim() === "") {
        $("#email-error").show();
        isvalid = false;
      }
  
      if ($("#number").val().trim() === "") {
        $("#age-error").show();
        isvalid = false;
      }
      if (!isvalid) {
        event.preventDefault();
      } else {
        alert(" all Data sent");
      }
    });
  });
  