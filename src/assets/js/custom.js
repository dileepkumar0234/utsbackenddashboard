// $(document).ready(function() {
//     $('.select2').select2(); //initialize
// });


function load_select(){
  $('.select2').select2();
}

function get_value(id) {
  return $("#"+id).val();
}

function onchange_value(event) {
  if (event.value != "") {
    $('#'+event.id+'_error').css('display','none');
  } else $('#'+event.id+'_error').css('display','block');
}
