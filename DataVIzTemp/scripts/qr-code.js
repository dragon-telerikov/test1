(function (global) {
    var qrcode = null,
        qrCodeValue = "http://www.telerik.com/appbuilder",
        app = global.app = global.app || {};

    app.qrcode = {
        createQRCode: function () {
            var $qrcode,
                $generateCodeBttn = $("#qrcode-generate"),
                $codeValue = $("#qrcode-value");

            if (qrcode !== null) {
                qrcode.destroy();
            }

            $qrcode = $("#qrcode").empty()

            qrcode = $qrcode.kendoQRCode({
                renderAs: "svg",
                value: qrCodeValue,
                errorCorrection: "M",
                size: $(window).width() / 2,
                border: {
                    color: "#000000",
                    width: 5
                }
            }).data("kendoQRCode");

            $generateCodeBttn.on("click", function () {
                var value = $codeValue.val();
                qrCodeValue = value;
                qrcode.value(value);
            });
        }
    };
})(window);