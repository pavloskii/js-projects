//-------main function------------------------------
function doOperation(operationID) {
    $(operationID).click(function (e) {
        if ($('#answer').val() == '') {
            return false;
            $('#equals').attr('onclick', '');
        }
        else if ($('#operation').attr('class') == 'activeAnswer') {
            $('#operation').val($('#operation').val() + $(operationID).val());
            $('#answer').val('');
            $('#equals').attr('onclick', '');
        }
        else {
            $('#operation').val($('#operation').val() + $('#answer').val() + $(operationID).val());
            $('#answer').val('');
            $('#equals').attr('onclick', '');
        }
    });
}
//--------------------------------------------------
$(document).ready(function (e) {
    $("button").css({ width: "50px", height: "50px" });

    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0').click(function () {
        let v = $(this).val();
        $('#answer').val($('#answer').val() + v);
    });
    $('#C').click(function () {
        $('#answer').val('');
        $('#operation').val('');
        $('#operation').removeClass('activeAnswer');
        $('#equals').attr('onclick', '');
    });
    //all operations------+-/*------------------------------
    doOperation("#subtract");
    doOperation("#divide");
    doOperation("#plus");
    doOperation("#multiply");
    //decimal-----------------------------------------------
    $("#decimal").click(function (e) {
        let decimal = $("#decimal").val();
        if ($('#answer').val() == '' || $('#answer').val().indexOf(decimal) > -1) {
            return false;
        } else {
            $('#answer').val($('#answer').val() + decimal);
        }
    });
    //plus/minus--------------------------------------------
    $("#plusMinus").click(function (e) {
        if ($('#answer').val() == '') {
            return false;
        }
        // else if ($('#operation').attr('class') == 'activeAnswer') {
        //    $('#operation').val($('#answer').val() * (-1));
        // }
        else {
            $('#operation').val($('#operation').val() + $('#answer').val() * (-1));
}
    });
//equals------------------------------------------------
$('#equals').click(function () {
    if ($('#equals').attr('onclick') != 'return false') {
        let a = $('#answer').val();
        let b = $('#operation').val();
        let c = b.concat(a);
        $('#answer').val(eval(c));
        $('#operation').val(eval(c));
        $('#operation').addClass('activeAnswer');
        $('#equals').attr('onclick', 'return false');
    }
});
});



