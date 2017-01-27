(function($) {
  var people = [{
    firstName: 'Dejan',
    lastName: 'Keroski',
    phone: '+389888888'
  }];
  //cash the dom
  var table = $('#table1');
  var tfoot = table.find('tfoot');
  var $firstName = table.find('#firstName');
  var $lastName = table.find('#lastName');
  var $phone = table.find('#phone');
  var $button = table.find('#add');
  var $btnSave = table.find('#save');
  var $btnEdit = table.find('#edit');
  var $btnRemove = table.find('#remove');
  var $input = table.find(".edit");

  //bind events
  $button.on('click', addPerson);
  table.on('click', '#remove', deletePerson);
  /*table.on("change",'.edit' ,editPerson);*/
  console.log($input);
  _render();

  //render
  function _render() {
    tfoot.html('');
    var length = people.length;
    for (var i = 0; i < length; i++) {
      tfoot.append('<tr><td><input class="edit" type="text" value="' + people[i].firstName + '" ></td><td><input class="edit" type="text" value="' + people[i].lastName + '" ></td><td><input type="text" class="edit" value="' + people[i].phone + '" ></td><td> <button id="remove" class="btn btn-block">X</button></td></tr>');
    }
  }

  //custom function
  function addPerson() {
    var person = {
      firstName: $firstName.val(),
      lastName: $firstName.val(),
      phone: $phone.val()
    };
    if($firstName.val()== "" || $lastName.val() == "" || $phone.val()=="") {
        alert("Please insert value in all inputs");
    }else {
    people.push(person);
    $firstName.val('');
    $lastName.val('');
    $phone.val('');
    _render()
    }
  }

  function deletePerson(event) {
      var element = event.target.closest('tr');
      var i = table.find('td').index(element);
      people.splice(i, 1);
      _render();
    }

})(jQuery);