     
        const citiesByCountry = {
            "US": [
                { "name": "New York", "areas": ["Manhattan", "Brooklyn", "Queens"] },
                { "name": "Los Angeles", "areas": ["Hollywood", "Venice Beach", "Santa Monica"] }
            ],
            "BD": [
                { "name": "Dhaka", "areas": ["Gulshan", "Banani", "Motijheel"] },
                { "name": "Chittagong", "areas": ["Pahartali", "Halishahar", "Khulshi"] }
            ]
        };

        function loadCities() {
            const country = document.getElementById("country").value;
            const citySelect = document.getElementById("city");
            const areaSelect = document.getElementById("area");

            // Clear existing options
            citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';
            areaSelect.innerHTML = '<option value="" disabled selected>Select Area</option>';
            areaSelect.disabled = true;

            if (country) {
                const cities = citiesByCountry[country];
                cities.forEach(city => {
                    const option = document.createElement("option");
                    option.value = city.name;
                    option.textContent = city.name;
                    citySelect.appendChild(option);
                });
                citySelect.disabled = false;
            }
        }

        function loadAreas() {
            const city = document.getElementById("city").value;
            const areaSelect = document.getElementById("area");

            // Clear existing options
            areaSelect.innerHTML = '<option value="" disabled selected>Select Area</option>';

            if (city) {
                const country = document.getElementById("country").value;
                const selectedCity = citiesByCountry[country].find(c => c.name === city);
                
                selectedCity.areas.forEach(area => {
                    const option = document.createElement("option");
                    option.value = area;
                    option.textContent = area;
                    areaSelect.appendChild(option);
                });
                areaSelect.disabled = false;
            }
        }













        
         // Category data
    const categories = {
        1: {
            name: "Technology",
            subcategories: {
                1: {
                    name: "Software",
                    topics: ["Web Development", "Mobile Apps", "AI"]
                },
                2: {
                    name: "Hardware",
                    topics: ["Computer", "Smartphones", "Gadgets"]
                },
                3: {
                    name: "Networking",
                    topics: ["Cyber Security", "Cloud Computing", "IoT"]
                }
            }
        },
        2: {
            name: "Health",
            subcategories: {
                1: {
                    name: "Nutrition",
                    topics: ["Vitamins", "Healthy Recipes", "Diet Plans"]
                },
                2: {
                    name: "Fitness",
                    topics: ["Gym Workouts", "Yoga", "Running"]
                },
                3: {
                    name: "Mental Health",
                    topics: ["Mindfulness", "Therapy", "Stress Management"]
                }
            }
        },
        3: {
            name: "Business",
            subcategories: {
                1: {
                    name: "Startups",
                    topics: ["Fundraising", "Product Development", "Marketing"]
                },
                2: {
                    name: "Corporate",
                    topics: ["Leadership", "Management", "Team Building"]
                }
            }
        },
        4: {
            name: "Entertainment",
            subcategories: {
                1: {
                    name: "Movies",
                    topics: ["Action", "Drama", "Comedy"]
                },
                2: {
                    name: "TV Shows",
                    topics: ["Reality Shows", "Series", "Documentaries"]
                },
                3: {
                    name: "Music",
                    topics: ["Pop", "Rock", "Classical"]
                }
            }
        }
    };

    // Function to update Subcategory based on selected Category
    document.getElementById('category').addEventListener('change', function() {
        const categoryId = this.value;
        const subcategoryContainer = document.getElementById('subcategory-container');
        const topicsContainer = document.getElementById('topics-container');
        const subcategorySelect = document.getElementById('subcategory');
        const topicsSelect = document.getElementById('topics');
        
        // Reset subcategory and topic
        subcategorySelect.innerHTML = '<option selected>Select Sub Category</option>';
        topicsSelect.innerHTML = '<option selected>Select Topic</option>';

        // Hide subcategory and topics initially
        subcategoryContainer.style.display = 'none';
        topicsContainer.style.display = 'none';

        if (categoryId) {
            const subcategories = categories[categoryId]?.subcategories || {};
            if (Object.keys(subcategories).length > 0) {
                subcategoryContainer.style.display = 'block';
                // Populate subcategories dropdown
                for (const subId in subcategories) {
                    const subcategory = subcategories[subId];
                    const option = document.createElement('option');
                    option.value = subId;
                    option.text = subcategory.name;
                    subcategorySelect.appendChild(option);
                }
            }
        }
    });

    // Function to update Topics based on selected Subcategory
    document.getElementById('subcategory').addEventListener('change', function() {
        const subcategoryId = this.value;
        const topicsContainer = document.getElementById('topics-container');
        const topicsSelect = document.getElementById('topics');

        // Reset topics dropdown
        topicsSelect.innerHTML = '<option selected>Select Topic</option>';
        topicsContainer.style.display = 'none';

        if (subcategoryId) {
            // Populate topics based on subcategory
            const selectedCategoryId = document.getElementById('category').value;
            const topics = categories[selectedCategoryId]?.subcategories[subcategoryId]?.topics || [];
            if (topics.length > 0) {
                topicsContainer.style.display = 'block';
                topics.forEach(topic => {
                    const option = document.createElement('option');
                    option.value = topic;
                    option.text = topic;
                    topicsSelect.appendChild(option);
                });
            }
        }
    });








// comment


    function postComment() {
    const commentBox = document.getElementById('new-comment-box');
    const commentList = document.getElementById('comment-list');
    
    if(commentBox.value.trim() !== "") {
        const comment = document.createElement('div');
        comment.classList.add('comment', 'mb-3');
        comment.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="img/profile.jpg" class="profile rounded-circle" alt="User Image" style="width: 40px; height: 40px;">
                <div class="ms-3">
                    <strong class="text-dark">New User</strong>
                    <small class="text-muted">Just now</small>
                    <p class="mt-1">${commentBox.value}</p>
                </div>
                <div class="dropdown ms-auto">
                    <button class="btn btn-link p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-ellipsis-h" style="color: #555;"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#"><i class="fas fa-edit"></i> Edit</a></li>
                        <li><a class="dropdown-item" style="color: red;" href="#"><i class="fas fa-trash"></i> Delete</a></li>
                        <li><a class="dropdown-item" style="color: red;" href="#"><i class="fas fa-flag"></i> Report</a></li>
                    </ul>
                </div>
            </div>
        `;
        commentList.appendChild(comment);
        commentBox.value = ""; // Clear the input field
    }
}







 // Toggle 'See More' and 'See Less' functionality
 function toggleText() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("moreText");
        var seeMore = document.getElementById("seeMore");
        
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            seeMore.innerHTML = "See more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            seeMore.innerHTML = "See less";
            moreText.style.display = "inline";
        }
    }











    // like 
     // Select the like button, like icon, and like count elements
  const likeBtn = document.getElementById('likeBtn');
  const likeIcon = document.getElementById('likeIcon');
  const likeCount = document.getElementById('likeCount');

  // Initialize a variable to keep track of likes
  let isLiked = false;
  let likes = 0;

  // Add click event listener to the like button
  likeBtn.addEventListener('click', function () {
    if (isLiked) {
      // If already liked, unlike it
      likes--;
      likeIcon.classList.remove('liked');
      isLiked = false;
    } else {
      // If not liked, like it
      likes++;
      likeIcon.classList.add('liked');
      isLiked = true;
    }
    likeCount.textContent = likes; // Update the like count display
  });











//   call count
// Select the call button and count element
const callBtn = document.getElementById('callBtn');
                    const callCount = document.getElementById('callCount');
                  
                    // Initialize call count
                    let count = 0;
                  
                    // Add event listener to the button
                    callBtn.addEventListener('click', function () {
                      count++; // Increment the call count
                      callCount.textContent = count; // Update the displayed count
                      window.location.href = 'tel:+1234567890'; // Redirect to the call
                    });




// cart count

// Function to increment the cart count of the clicked button
function incrementCart(button) {
                  const countElement = button.querySelector('.count');  // Get the count element inside the clicked button
                  let count = parseInt(countElement.textContent);  // Get the current count as an integer
                  count++;  // Increment the count
                  countElement.textContent = count;  // Update the count display
                }






// colaps details
// Handle call count increment
let callapsCount = 0;
document.getElementById('callBtn').addEventListener('click', function() {
  callCount++;  // Increment the call count
  document.getElementById('callCount').textContent = callCount;  // Update the displayed count
});

// Toggle collapsible section
document.querySelector('.card').addEventListener('click', function() {
  const collapseElement = document.getElementById('extraDetails');
  const bsCollapse = new bootstrap.Collapse(collapseElement, {
    toggle: true
  });
});






// Function to toggle Like Button state
function toggleLike(btnId, iconId, countId) {
    var likeCount = document.getElementById(countId);
    var likeIcon = document.getElementById(iconId);
    var currentCount = parseInt(likeCount.textContent);
    
    // Toggle the like icon and increase/decrease the count
    if (likeIcon.classList.contains('fa-thumbs-up')) {
      likeIcon.classList.remove('fa-thumbs-up');
      likeIcon.classList.add('fa-thumbs-down');
      likeCount.textContent = currentCount + 1;
    } else {
      likeIcon.classList.remove('fa-thumbs-down');
      likeIcon.classList.add('fa-thumbs-up');
      likeCount.textContent = currentCount - 1;
    }
  }

  // Function to handle cart item increment
  function incrementCart(button) {
    var countSpan = button.querySelector('.count');
    var currentCount = parseInt(countSpan.textContent);
    countSpan.textContent = currentCount + 1;
  }




//   login signup togol 
document.getElementById("nextButtonUnique").addEventListener("click", function () {
    const phoneInput = document.getElementById("phoneUnique").value.trim();
    const passwordField = document.getElementById("passwordFieldUnique");
    const nameField = document.getElementById("nameFieldUnique");
    const imageField = document.getElementById("imageFieldUnique");
    const otpField = document.getElementById("otpFieldUnique");
    const forgetPasswordLink = document.getElementById("forgetPasswordLink");
    const nextButton = document.getElementById("nextButtonUnique");

    // Reset all fields and link initially
    passwordField.style.display = "none";
    nameField.style.display = "none";
    imageField.style.display = "none";
    otpField.style.display = "none";
    forgetPasswordLink.style.display = "none";

    if (phoneInput === "123") {
        // Show password field and "Forget Password?" link
        passwordField.style.display = "block";
        forgetPasswordLink.style.display = "block";

        // Change button text to "Login"
        nextButton.textContent = "Login";

        // Add Show/Hide functionality for password
        const passwordInput = document.getElementById("passwordUnique");
        const togglePassword = document.getElementById("togglePasswordUnique");

        togglePassword.addEventListener("click", function () {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePassword.textContent = "Hide";
            } else {
                passwordInput.type = "password";
                togglePassword.textContent = "Show";
            }
        });
    } else if (phoneInput !== "") {
        // Show name, image upload, and password fields
        nameField.style.display = "block";
        imageField.style.display = "block";
        passwordField.style.display = "block";
        otpField.style.display = "block";

        // Change button text to "Signup"
        nextButton.textContent = "Signup";
    } else {
        alert("Please enter a phone number.");
    }
});







function toggleMenu() {
    const menu = document.getElementById('menu-options');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function editPost() {
    alert('Edit post clicked!');
}

function deletePost() {
    alert('Delete post clicked!');
}

function reportPost() {
    alert('Report post clicked!');
}

// Hide menu if clicked outside
document.addEventListener('click', (event) => {
    const menu = document.getElementById('menu-options');
    const menuIcon = document.querySelector('.menu i');
    if (menu.style.display === 'block' && !menu.contains(event.target) && event.target !== menuIcon) {
        menu.style.display = 'none';
    }
});







