$(document).ready(function() {
    lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
  
  var nameArray = ["John", "Michael", "Josh", "Pectin", "Aaron", "Naresh", "Kumar"];
  var slider = $('.slider').bxSlider({
    onSlideAfter: function($slideElement, oldIndex, newIndex) {
                var randomIndex = Math.floor(Math.random() * nameArray.length);
                var randomString = nameArray[randomIndex];
  
                $("#fnameIn").val(randomString).trigger('change'); // trigger change event
            }

  });
 
	$.validator.addMethod("canadianPostalCode", function(value, element) {
    var postalCodePattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    return this.optional(element) || postalCodePattern.test(value);
}, "Please enter a valid Canadian postal code.");
	$.validator.addMethod("phoneUS", function(phoneNumber, element) {
    phoneNumber = phoneNumber.replace(/\s+/g, ""); // Remove spaces
    return this.optional(element) || phoneNumber.match(/^\d{10}$/);
}, "Please enter a 10-digit phone number.");
   $("form").each(function () {
        if ($(this).find("#email").length) {
            $(this).validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    email: {
                        required: " Please enter an email address.",
                        email: " Please enter a valid email address."
                    }
                }
            });
        } else if ($(this).find("#password").length) {
            $(this).validate({
				rules: {
                    password: {
                        required: true,
                         minlength: 5 
                    }
                },
                messages: {
                    email: {
                        required: " Please enter an password.",
                        minlength: " Please enter a >= 5 char password."
                    }
                }
            });			
        }
		else if ($(this).find("#phoneNumber").length) {
            $(this).validate({
				rules: {
                    phoneNumber: {
                        required: true,
                         phoneUS: true
                    }
                },
                messages: {
                    phoneNumber: {
                        required: " Please enter a phone number.",
                        phoneUS: " 10 Digit phone number required."
                    }
                }
            });
        }
		else if ($(this).find("#zipCode").length) {
            $(this).validate({
				rules: {
                    zipCode: {
                        required: true,
                         canadianPostalCode: true 
                    }
                },
                messages: {
                    zipCode: {
                        required: " Please enter a zip code.",
                        phoneUS: " Not a valid Canadian zipcode."
                    }
                }
            });
        }
		else if ($(this).find("#fname").length) {
            $(this).validate({
				rules: {
                    fname: {
                         required: true,
						lettersonly: true,
						minlength: 2
                    }
                },
                messages: {
                    fname: {
                        required: " Please enter a name",
                        lettersonly: " Not a valid name.",
						minlength: " Not a valid name."
                    }
                }
            });
        }
		else if ($(this).find("#lname").length) {
            $(this).validate({
				rules: {
                    lname: {
                         required: true,
						lettersonly: true,
						minlength: 2
                    }
                },
                messages: {
                    lname: {
                        required: " Please enter a name",
                        lettersonly: " Not a valid name.",
						minlength: " Not a valid name."
                    }
                }
            });
        }
    });
	$("#singleSubmitButton").click(function () {
        // Check if all forms are valid
        var allFormsValid = true;

        $("form").each(function () {
            if (!$(this).valid()) {
                allFormsValid = false;
            }
        });

        if (allFormsValid) {
            $("form").each(function () {
				 
                this.submit();
				alert("Success!");
				
            });
		
        }
		else {
            alert("Form validation failed. Please check the errors.");
        }
		
    });
	
  //======================================
  // postal code and phone number
  $("#zipInButton").click(function() {

    var postalC = $("#zipIn").val();
    var postalCRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    if (postalCRegex.test(postalC)) {
      $("#PCvalidationResult").text("Valid").css("color", "green");
    } else {
      $("#PCvalidationResult").text("Invalid ZIP code").css("color", "red");
    }
  });

  //========================================
  $("#fnameButton").click(function() {
  var fname = $("#fnameIn").val();
  var nameRegex = /^[A-Za-z]{2,20}$/;
  if (nameRegex.test(fname)){
	$("#FNValidationResult").text("Valid").css("color","green");
  }
  else {
  $("#FNValidationResult").text("Not a real name").css("color","red");
  }
});
   $("#lnameButton").click(function() {
  var lname = $("#lnameIn").val();
  var lnameRegex = /^[A-Za-z]{2,20}$/;
  if (lnameRegex.test(lname)){
	$("#LNValidationResult").text("Valid").css("color","green");
  }
  else {
  $("#LNValidationResult").text("Not a real name").css("color","red");
  }
});
});