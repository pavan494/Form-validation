function validateForm() {7
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var occupation = document.getElementById("occupation").value;
    var education = document.getElementById("education").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var pan = document.getElementById("pan").value;

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      dob === "" ||
      gender === "" ||
      education === "" ||
      username === "" ||
      password === "" ||
      pan === ""
    ) {
      alert("Please fill in all fields");
      return false; 
    }

    var uploadedFile = document.getElementById("image").files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      var imageData = event.target.result;
      var fileSize = uploadedFile.size;
      fileSize /= 1024*1024;
      var user_data = {
        name: name,
        email: email,
        phone: phone,
        dob: dob,
        occupation: occupation,
        username: username,
        password: password,
        gender: gender,
        education: education,
        pan: pan,
        imageData: imageData,
        fileSize: fileSize,
      };
      localStorage.setItem(username, JSON.stringify(user_data));
      alert("submitted");
      window.location.reload();
    };
    reader.readAsDataURL(uploadedFile);
    
  }
  function validateName() {
    var name = document.getElementById("name").value;
    var button = document.querySelector('.button-1');
    var input = document.getElementById("name")
    var nameRegex = /^[A-Za-z\s]+$/;
    if (nameRegex.test(name)) {
      document.getElementById("nameError").innerHTML = "";
      button.style.pointerEvents="auto";
      input.classList.remove("is-invalid")
      input.classList.add("is-valid")
    } else {
      document.getElementById("nameError").innerHTML = "Enter valid name";
      button.style.pointerEvents="none";
      input.classList.add("is-invalid")
      input.classList.remove("is-valid")
    }
  }
  function validateYear() {
    var userYear = document.getElementById("dob").value;
    var button = document.querySelector('.button-1');
    var input = document.getElementById("dob")
    var year = new Date(userYear).getFullYear();
    if (!(year >= 1950 && year <= 2010)) {
      document.getElementById("DobError").innerHTML =
        "Invalid year! Please enter a year between 1950 and 2010.";
        button.style.pointerEvents="none"; 
        input.classList.add("is-invalid")
      input.classList.remove("is-valid")
    } else {
      document.getElementById("DobError").innerHTML = "";
      button.style.pointerEvents="auto";
      input.classList.remove("is-invalid")
      input.classList.add("is-valid")
    }
  }
  function validateemail() {
    var email = document.getElementById("email").value;
    var button = document.querySelector('.button-1');
    var input = document.getElementById("email")
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      input.classList.remove("is-invalid")
      input.classList.add("is-valid")
      document.getElementById("emailError").innerHTML = "";
      button.style.pointerEvents="auto";
    } else {
      input.classList.add("is-invalid")
      input.classList.remove("is-valid")
      document.getElementById("emailError").innerHTML = " Enter valid email";
      button.style.pointerEvents="none";
    }
  }
  function validatePhoneNumber() {
    var phone = document.getElementById("phone").value;
    var button = document.querySelector('.button-1');
    var input = document.getElementById("phone")
    var phoneRegex = /^[6-9]\d{9}$/;
    if (phoneRegex.test(phone)) {
      document.getElementById("PhoneNUmberError").innerHTML = "";
      button.style.pointerEvents="auto";
      input.classList.remove("is-invalid")
      input.classList.add("is-valid")
    } else {
      document.getElementById("PhoneNUmberError").innerHTML =
        " Enter valid number";
        button.style.pointerEvents="none";
        input.classList.add("is-invalid")
      input.classList.remove("is-valid")
    }
  }
  function validatePassword() {
    var password = document.getElementById("password").value;
    var button = document.querySelector('.button-1');
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    var validationMessageDiv = document.getElementById("passwordHelp");
    var input = document.getElementById("password")
    // if (passwordRegex.test(password)) {
    //   document.getElementById("passwordError").innerHTML = "";
    //   button.style.pointerEvents="auto";
    // } else {
    //   document.getElementById("passwordError").innerHTML =
    //     "Plz Enter Valid Password";
    //     button.style.pointerEvents="none";
    // }
    if (passwordRegex.test(password)) {
      validationMessageDiv.style.color = "inherit"; // Reset color to inherit the parent's color
      input.classList.remove("is-invalid")
      input.classList.add("is-valid")
      return true;
  } 
  else {
      validationMessageDiv.textContent = 'Password must be at least 8 characters long with 1 uppercase letter and 1 special character.'; // Set color to red
      validationMessageDiv.style.setProperty("color", "red", "important");
      input.classList.add("is-invalid")
      input.classList.remove("is-valid")
      return false;
  }
  }
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  }
  function validatePan() {
    var pan = document.getElementById("pan").value;
    var button = document.querySelector('.button-1');
    var panRegex = /^[A-Z]{5}\d{4}[A-Z]$/;
    var input = document.getElementById("pan")
    if (panRegex.test(pan)) {
      document.getElementById("panError").innerHTML = "";
      button.style.pointerEvents = "auto";  
      input.classList.remove("is-invalid")
      input.classList.add("is-valid")
    } else {
      document.getElementById("panError").innerHTML =
        " Enter Valid Pan Number";
        button.style.pointerEvents="none";
        input.classList.add("is-invalid")
      input.classList.remove("is-valid")
        
    }
  }
  function validateImage() {
    const img = document.getElementById("image");
    var button = document.querySelector('.button-1');
    const errorMsg = document.getElementById("imageError");
    const maxSize = 2 * 1024 * 1024; //mbytes
    if (img.files && img.files[0]) {
      const fileSize = img.files[0].size;
      if (fileSize > maxSize) {
        errorMsg.textContent =
          "Image size exceeds 2MB. Please select a smaller image.";
        errorMsg.style.display = "block";
        button.style.pointerEvents="none";
        return false;
      } else {
        errorMsg.style.display = "none";
        button.style.pointerEvents="auto";
        return true; 
      }
    }
  }

  function uniqUserName() {
    var username = document.getElementById("username").value;
    var input = document.getElementById("username")
    var button = document.querySelector('.button-1');
    var uniq = Object.keys(localStorage);
    console.log(uniq);
    if (uniq.includes(username)) {
      document.getElementById("usernameError").innerHTML =
        "User Name Allready Exits";
        button.style.pointerEvents="none";
        input.classList.add("is-invalid")
        input.classList.remove("is-valid")

    } else {
      document.getElementById("usernameError").innerHTML = "";
      button.style.pointerEvents = "auto";
        input.classList.remove("is-invalid")
        input.classList.add("is-valid")

    }
  }

  function searchData() {
     document.getElementById('registrationForm').style.display="none";
    var searchInput = document.querySelector(".search-input").value;
    var searchResult = document.getElementById("search-result");
    var flag = false;
    if (searchInput === "") {
      searchResult.innerHTML = "<p>Enter something</p>";
      var backBtn = document.createElement("button");
      backBtn.classList.add('btn', 'btn-secondary', 'mt-3', 'mb-4');
      backBtn.innerHTML = "Back to Search";
      backBtn.id = "backButton";
      backBtn.addEventListener("click", function () {
        searchResult.innerHTML = ""; 
        registrationForm.style.display = "block"; 
        backBtn.remove(); 
      });
      searchResult.appendChild(backBtn);
      return;
    }
    searchResult.innerHTML = "";
    for (var i = 0; i < localStorage.length; i++) {
      var username = localStorage.key(i);
      var user_data = JSON.parse(localStorage.getItem(username));
      console.log("name is", user_data.name);
  
      if (user_data.name.toLowerCase().includes(searchInput.toLowerCase())) {
        console.log("username search");
        displayUserData(user_data);
        flag = true;
      }
  
       var userDob = new Date(user_data.dob);
      var currentDate = new Date();
      var millisecondsPerDay = 24 * 60 * 60 * 1000;
      var daysDifference = Math.floor(
        (currentDate - userDob) / millisecondsPerDay
      );
      console.log(daysDifference);
  
      var isMentionedInMB = searchInput.toUpperCase().includes("MB");
      if (isMentionedInMB) {
        if (parseFloat(user_data.fileSize) < parseFloat(searchInput)) {
          console.log("MB Diff:", parseFloat(searchInput));
          displayUserData(user_data);
          flag = true;
        }
      }
   
      if (!isMentionedInMB && daysDifference < parseInt(searchInput)) {
        console.log("days diff");
        displayUserData(user_data);
        flag = true;
      }

    }
    if (!flag) {
      console.log("Search not found");
      searchResult.innerHTML = "<p>Search not found</p>";
      var backBtn = document.createElement("button");
      backBtn.classList.add('btn', 'btn-secondary', 'mt-3', 'mb-4');
      backBtn.innerHTML = "Back to Search";
      backBtn.id = "backButton";
      backBtn.addEventListener("click", function () {
        searchResult.innerHTML = ""; 
        registrationForm.style.display = "block"; 
        backBtn.remove(); 
      });
      searchResult.appendChild(backBtn);
    }
    else {
      var backBtn = document.createElement("button");
      backBtn.classList.add('btn', 'btn-secondary', 'mt-3', 'mb-4');
      backBtn.innerHTML = "Back to Search";
      backBtn.id = "backButton";
      backBtn.addEventListener("click", function () {
        searchResult.innerHTML = ""; 
        registrationForm.style.display = "block"; 
        backBtn.remove(); 
      });
      searchResult.appendChild(backBtn);
      
    }

    function displayUserData(userData) {
      const maskedPan = userData.pan.substring(0, 2) + '*'.repeat(userData.pan.length - 2);
      const maskedpassword = userData.password.substring(0, 2) + '*'.repeat(userData.password.length - 2);
      searchResult.innerHTML += `
          <div>
            <h3>${userData.name}</h3>
            <p>Email: ${userData.email}</p>
            <p>Phone: ${userData.phone}</p>
            <p>DOB: ${userData.dob}</p>
            <p>Gender: ${userData.gender}</p>
            <p>Occupation: ${userData.occupation}</p>
            <p>Education: ${userData.education}</p>
            <p>Username: ${username}</p>
            <p>Password: ${maskedpassword}</p>
            <p>PAN: ${maskedPan}</p>
            <img src="${userData.imageData}" alt="User Image" width="100" height="100">
          </div>
        `;
    }
   
  }
  