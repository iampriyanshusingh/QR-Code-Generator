function generateQRCode() {
    var inputText = document.getElementById('input-text').value;
    var qrCodeContainer = document.getElementById('qr-code');

    if (inputText !== "") {
        qrCodeContainer.innerHTML = "";
        var qrcode = new QRCode(qrCodeContainer, {
            text: inputText,
            width: 256,
            height: 256
        });
    } else {
        alert("Please enter text to generate QR code.");
    }
}