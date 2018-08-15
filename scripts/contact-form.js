$('#contactForm').submit(function() {
    if($('#fname').val() == ''){
        alert('Please fill out your FIRST name.');
        return false;
    }

    if($('#lname').val() == ''){
        alert('Please fill out your LAST name.');
        return false;
    }

    if($('#subject').val() == ''){
        alert('Please fill out SUBJECT form.');
        return false;
    }
});