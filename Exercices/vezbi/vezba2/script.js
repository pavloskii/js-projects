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

    function appendEmployees() {
        $("#tfoot").html('');
        for (let i = 0; i < employees.length; i++) {
            $("#tfoot").append(`
    <tr id='row${i}'>
           <td> <p>${i + 1}</p></td>
            <td> <input type="text" class="form-control" value="${employees[i].firstName}" id="name${i}" readonly></td>
            <td> <input type="text" class="form-control" value="${employees[i].lastName}" id="last${i}" readonly></td>
            <td> <input type="email" class="form-control" value="${employees[i].email}" id="email${i}" readonly></td>
            <td> <input type="text" class="form-control" value="${employees[i].password}" id="password${i}" readonly></td>
             <td> <input type="button" class="btn btn-primary" id="save${i}" value="Save"></td>
            <td> <input type="button" class="btn btn-warning" id='edit${i}' value="Edit"></td>
            <td> <input type="button" class="btn btn-danger" id='delete${i}' value="X" "</td>
    </tr>`)

            //edit button------------------------------------------------------------------------------------------------------------------------------
            $(`#edit${i}`).click(function () {
                $(`#save${i}, #delete${i}`).css('display', 'block');
                $(`#name${i}, #last${i}, #email${i}, #password${i}`).removeAttr('readonly');

            });
            //save after edit button------------------------------------------------------------------------------------------------------------------------------
            $(`#save${i}`).click(function () {
                $(`#save${i}, #delete${i}`).css('display', 'none');
                $(`#name${i}, #last${i}, #email${i}, #password${i}`).attr('readonly', 'readonly');

            });
            //delete button------------------------------------------------------------------------------------------------------------------------------
            $(`#delete${i}`).click(function () {
                $(`#row${i}`).remove();
                employees.splice(i, 1);
                appendEmployees();

            });
        }
    };

    appendEmployees();



    $('#firstName').val('');
    $('#lastName').val('');
    $('#email').val('');
    $('#password').val('');
});




