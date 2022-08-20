$(document).ready(function()
{   
    //Variable declaring and assigning
    var $name = $("#first_name"),
        $msgName = $("#err-first-name"),
        $last_name = $("#last_name"),
        $msgLastName = $("#err-last-name"),
        $street_address = $("#street_address"),
        $msgStreet1 = $("#err-street")
        $street_address_2 = $("#street_address_2"),
        $msgStreet2 = $("#err-street-2")
        $city = $("#city"),
        $msgCity = $("#err-city"),
        $state = $("#state"),
        $msgState = $("#stateHint"),
        $zip = $("#zip"),
        $msgZip = $("#zipHint"),
        $phone = $("#phone"),
        $msgPhone = $("#phoneHint"),
        $email = $("#email"),
        $msgEmail = $("#emailHint"),
        $cardNumber = $("#cardNumber"),
        $msgCard = $("#cardHint"),
        $cForm = $("#custForm"),
        $msgCardMonthYear = $("#err-mo-yr")
        



    //Focus functions for tips to appear and disappear on the side of textboxes    
    $state.focus(function()
    {
        $msgState.empty().append(" Use a two-letter abbreviation");
    }).blur(function(){
        $msgState.empty();
    })

    $zip.focus(function()
    {
        $msgZip.append(" Use a 5 digit zip code");}).blur(function(){$msgZip.empty();
    }) 

    $phone.focus(function()
    {
        $msgPhone.append(" Numbers Only - No spaces or dashes");}).blur(function(){$msgPhone.empty();
    })

    $email.focus(function(){
        $msgEmail.append(" Example - john@doe.com");}).blur(function(){$msgEmail.empty();
    })

    $cardNumber.focus(function()
    {
        $msgCard.append(" Numbers Only - No spaces or dashes");}).blur(function(){$msgCard.empty();
    }) 

    $cForm.submit(function(event)
    {
        //Assign Variables
        var firstNamePattern = /^[a-zA-Z ]{2,20}$/,
            lastNamePattern = /^[a-zA-Z ]{2,20}$/,
            cityPattern = /^[a-zA-Z ]{2,20}$/,
            streetPattern = /^[a-zA-Z0-9 ]{2,20}$/,
            statePattern = /^[a-zA-Z]{2}$/,
            zipPattern = /^[0-9]{5}$/,
            phonePattern = /^[0-9]{10}$/,
            emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            cardPattern = /^[0-9]{13,16}$/,
            errors = 0,
            fieldColor = "#FFF",
            errColor = "#FDD";
            $radioSelected = $("#custForm input[type='radio']:checked").val();
            $monthSelected = $("#cardMonth").val();
            $yearSelected = $("#cardYear").val();

        //Reset on Submission
        $(".fields").css("background-color", fieldColor);
        $(".err-msg").empty();

        // First Name Test
        if(!firstNamePattern.test($name.val()))
        {   
            //If first name doesn't match pattern, change text box color, and present error message, increment error counter
            $name.css("background-color", errColor);
            $msgName.append(" Required: Must contain only letters and spaces between 2 and 20 characters!");
            errors += 1;
        }

        //Last Name Test
        if(!lastNamePattern.test($last_name.val()))
        {   
            $last_name.css("background-color", errColor);
            $msgLastName.append(" Required: Must contain only letters and spaces between 2 and 20 characters!");
            errors += 1;
        }

        //City Name Test
        if(!cityPattern.test($city.val()))
        {   
            $city.css("background-color", errColor);
            $msgCity.append(" Required: Must contain only letters and spaces between 2 and 20 characters!");
            errors += 1;
        }

        //Street Address 1 Test
        if(!streetPattern.test($street_address.val()))
        {   
            $street_address.css("background-color", errColor);
            $msgStreet1.append(" Required: Must contain only letters, numbers and spaces between 2 and 20 characters!");
            errors += 1;
        }

        //Street Address 2 Test Optional
        if ($street_address_2.val().length > 0)
        {
            if(!streetPattern.test($street_address_2.val()))
            {   
                $street_address_2.css("background-color", errColor);
                $msgStreet2.append(" Must contain only letters, numbers and spaces between 2 and 20 characters!");
                errors += 1;
            }
        }

        //State Test
        if(!statePattern.test($state.val()))
        {   
            $state.css("background-color", errColor);
            $msgState.append(" Required: Must contain a two-letter state abbreviation!");
            errors += 1;
        }

        //Zip Test
        if(!zipPattern.test($zip.val()))
        {   
            $zip.css("background-color", errColor);
            $msgZip.append(" Required: Must contain a 5 number zip code!");
            errors += 1;
        }

        //Optional : Phone test
        if ($phone.val().length > 0)
        {
            if(!phonePattern.test($phone.val()))
            {   
                $phone.css("background-color", errColor);
                $msgPhone.append(" Must contain a 10 digit number with no spaces or dashes!");
                errors += 1;
            }
        }

        //Email Test
        if(!emailPattern.test($email.val()))
        {   
            $email.css("background-color", errColor);
            $msgEmail.append(" Required: Must be a valid e-mail address!");
            errors += 1;
        }

        // If payment type is selected
        if($radioSelected != 'none')
        {
            //Validate card number to pattern
            if(!cardPattern.test($cardNumber.val()))
            {   
                //Error
                $cardNumber.css("background-color", errColor);
                $msgCard.append(" Required: Must contain a 13-16 digit number with no spaces or dashes!");
                errors += 1;
            }

            //Make sure month and year are selected
            if($monthSelected == "month" || $yearSelected == "year")
            {
                $msgCardMonthYear.append(" Must select a month and year!");
                errors += 1;
            }
        }
    
        //If errors present, show message at start of form and stop submission of form.
        if (errors > 0)
        {
            $cForm.prepend('<div class="err-msg">Please edit the marked fields below to fix errors!</div>');
            event.preventDefault();
        }
    });
});


