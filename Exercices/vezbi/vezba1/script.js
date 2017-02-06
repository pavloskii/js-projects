class Employee {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
//--------------------------------------
let employees = [];

//-----save-----------------------------
$('#saveButton').click(function () {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let email = $('#email').val();
    let password = $('#password').val();

    let employee = new Employee(firstName, lastName, email, password);
    employees.push(employee);

    let empIndex = employees.indexOf(employee) + 1;
    console.log(empIndex);

    $("#tfoot").append(`
    <tr id='row${empIndex}'>
           <td> <p>${empIndex}</p></td>
            <td> <input type="text" class="form-control" value="${firstName}" id="name${empIndex}" readonly></td>
            <td> <input type="text" class="form-control" value="${lastName}" id="last${empIndex}" readonly></td>
            <td> <input type="email" class="form-control" value="${email}" id="email${empIndex}" readonly></td>
            <td> <input type="text" class="form-control" value="${password}" id="password${empIndex}" readonly></td>
             <td> <input type="button" class="btn btn-primary" id="save${empIndex}" value="Save"></td>
            <td> <input type="button" class="btn btn-warning" id='edit${empIndex}' value="Edit"></td>
            <td> <input type="button" class="btn btn-danger" id='delete${empIndex}' value="X" "</td>
    </tr>`)

//edit button------------------------------------------------------------------------------------------------------------------------------
    $(`#edit${empIndex}`).click(function () {  
        $(`#save${empIndex}, #delete${empIndex}`).css('display', 'block');
        $(`#name${empIndex}, #last${empIndex}, #email${empIndex}, #password${empIndex}`).removeAttr('readonly');

    });
//save after edit button------------------------------------------------------------------------------------------------------------------------------
     $(`#save${empIndex}`).click(function () {  
        $(`#save${empIndex}, #delete${empIndex}`).css('display', 'none');
        $(`#name${empIndex}, #last${empIndex}, #email${empIndex}, #password${empIndex}`).attr('readonly', 'readonly');

    });
//delete button------------------------------------------------------------------------------------------------------------------------------
    $(`#delete${empIndex}`).click(function () {  
        $(`#row${empIndex}`).remove();  

    });

    $('#firstName').val('');
    $('#lastName').val('');
    $('#email').val('');
    $('#password').val('');
});




