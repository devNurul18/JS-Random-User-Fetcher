/*** APPROACH -1 */


// document.getElementById('fetchUser').addEventListener("click" , function(){

//     //Create the XHR Request object
//     let xhr = new XMLHttpRequest();

//     //Prepare the Request and send a "Get" request to th url
//     xhr.open("GET" , "https://randomuser.me/api/", true);

//     //This onload handle the response
//     //onload event will triggered when the request is successfully completed and server respond
//     xhr.onload = function () {
//         if (xhr.status === 200) {

//             //Convert the raw jason response in actual Json object using "JSON.PARSE"
//             let data = JSON.parse(xhr.responseText)
//             let user = data.results[0]

//             let name = `${user.name.first} ${user.name.last}`
//             let email = user.email

//             document.getElementById("userImage").src = user.picture.large;
//             document.getElementById("userName").innerHTML = `${user.name.first} ${user.name.last}`
//             document.getElementById("userEmail").innerHTML = `📧 ${user.email}`
//             document.getElementById("userLocation").innerHTML = `📍${user.location.city}, ${user.location.country}`

//         }
//     }

//     //send the request to the server
//     xhr.send()

// })





/*** APPROACH -2 */


    //ADD THE EVENT Listener
    // document.getElementById('getUser').addEventListener('click' , fetchUser)

    // function fetchUser () {
    //     //Create the XHR Request object
    // let xhr = new XMLHttpRequest();

    // //Prepare the Request and send a "Get" request to th url
    // xhr.open("GET" , "https://randomuser.me/api/", true);

    // //This onload handle the response
    // //onload event will triggered when the request is successfully completed and server respond
    // xhr.onload = function () {
    //     if (xhr.status === 200) {

    //         //Convert the raw jason response in actual Json object using "JSON.PARSE"
    //         let data = JSON.parse(xhr.responseText)
    //         let user = data.results[0]

    //         let name = `${user.name.first} ${user.name.last}`
    //         let email = user.email
    //         let city = user.location.city
    //         let country = user.location.country

    //         document.getElementById("userImage").src = user.picture.large;
    //         document.getElementById("userName").innerHTML = `${name}`
    //         document.getElementById("userEmail").innerText = `📧 ${email}`
    //         document.getElementById("Location").innerText = ` 📍${city} , ${country}`

            
        
    //     }
    // }

    // //send the request to the server
    // xhr.send()

    // }

    // // Fetch first user on page load
    // window.onload = fetchUser;

    






    //Approach No-3


    //Fetch the data using async function and await

    document.getElementById('getUser').addEventListener('click' , fetchUser)


    async function fetchUser() {
        //Show the Loading Spinner

            try {
                // Fetch data using the Fetch API
                let response = await fetch('https://randomuser.me/api/')
                let data = await response.json();
                let user = data.results[0]


                // Extract user details
                let name = `${user.name.first} ${user.name.last}`;
                let email = user.email;
                let gender = user.gender;
                let phone = user.phone;
                let city = user.location.city 
                let country = user.location.country

                // Set user details in the UI
                document.getElementById("userImage").src = user.picture.large;
                document.getElementById("userName").innerHTML = name;
                document.getElementById("userEmail").innerText = `📧 ${email}`;
                document.getElementById("userGender").innerText = `Gender: ${gender}`;
                document.getElementById("userPhone").innerText = `📱 ${phone}`;
                document.getElementById("userLocation").innerText = `📍 ${city}, ${country}`;

    
            } catch (error) {
                console.log("Error fetching user:", error);

            }
        }

        window.onload = fetchUser;