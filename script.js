var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

document
  .getElementById("whatsappButton")
  .addEventListener("click", function () {
    var phoneNumber = "replace_with_recipient_number";
    var message = encodeURIComponent("I love you Darling 😘");

    var whatsappUrl = "https://wa.me/" + 917982453748 + "?text=" + message;

    window.open(whatsappUrl, "_blank");
  });
