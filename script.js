<script>

        let signupBtn = document.getElementById("signupBtn");
        let signinBtn = document.getElementById("signinBtn");
        let nameField = document.getElementById("name");
        let title = document.getElementById("title");

        signinBtn.onclick = function(){
            nameField.style.maxHeight ="0";
            title.innerHTML ="sign In";
            signupBtn.classList.add("disable");
            signinBtn.classList.remove("disable");


        }


    </script>