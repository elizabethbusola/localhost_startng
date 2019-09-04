 function validateForm() {
           var email = document.forms["contactForm"]["email"];
           if (email.value == "") {
               alert("Please input your email address");
               email.focus();
               return false;
           }
           var name = document.contactForm.name;
           if (name.value == "") {
               alert("Please input your name");
               name.focus();
               return false;
           }
            if (name.value.length < 4) {
               alert("Please input at least 4 characters");
               name.focus();
               return false;
           }

           var title = document.contactForm.title;
           if (title.value == "") {
               alert("Please input the title of your message");
               name.focus();
               return false;
           }
            var message = document.contactForm.message;
           if (message.value == "") {
               alert("Please type your message");
               name.focus();
               return false;
           }
            if (message.value.length < 20) {
               alert("Please input at least 20 characters");
               name.focus();
               return false;
           }

}