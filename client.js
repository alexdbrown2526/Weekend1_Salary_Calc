console.log('js');

$(document).ready(readyNow);

function readyNow(){
    $('#submitButton').on('click', function(handleClick){
        
        
        
        
        console.log('button working');
    })
}

function handleClick() {
    let firstName = $('#firstNameInput').val()
    let lastName = $('#lastNameInput').val()
    let identity = $('#identityInput').val()
    let title = $('#titleInput').val()
    let annualSalary = $('#annualSalary').val()

    $('#employeeBody').append(`
    <tr>
        <td>`+ firstName + `</td>
        <td>`+ lastName + `</td>
        <td>`+ identity + `</td>
        <td>`+ title + `</td>
        <td>`+ annualSalary +`</td>

    </tr>
`);

    $('#firstNameInput').val()
    $('#lastNameInput').val()
    $('#identityInput').val()
    $('#titleInput').val()
    $('annualSalary').val()

}






console.log('jq workin');