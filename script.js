/*Chatbot*/

function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'flex';
    } else {
        chatbox.style.display = 'none';
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        chatInput.value = '';
        setTimeout(() => {
            handleBotResponse(message);
        }, 1000);
    }
}

function addMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerText = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleBotResponse(userMessage) {
    let botResponse = "I'm sorry, I didn't understand that.";

    if (userMessage.toLowerCase() === 'hello') {
        botResponse = "How can I assist you?";
    }
    else     if (userMessage.toLowerCase() === 'hii') {
        botResponse = "How can I assist you?";
    }
    else if (userMessage.toLowerCase().includes("admission")) {
        botResponse = `The admission process in Rajasthan Technical Education can vary depending on the program and other factors.
    
        Based on the search results, it seems the admission procedure at RTU is primarily online. Some key details I could gather:
    
     - The merit list is displayed on the RTE admission portal 
     - Seats are allotted based on merit, category, and availability. 
     - Students need to report to the GSMS office with required documents to confirm admission and pay the tuition fees.
     - Refund policies follow UGC norms if admission is cancelled.`;
    }
    else if (userMessage.toLowerCase().includes("scholarship")) {
        botResponse = `
      Rajasthan Technical Education (RTE) offers several scholarship opportunities:

    1. *Merit-based Scholarships:*
   - Cover 25% to 100% of tuition fees.

    2. *DPIIT-SPRIHA IPR Chair Scheme:*
   - Rs. 25,000 to Rs. 28,000 per month based on qualifications.
   - Includes an annual contingency grant.

    3. *Government of Rajasthan Schemes:*
   - Financial assistance for IPR applications through SSIP and DIC.

    For more details, contact the RTE scholarship committee or email info@rte.ac.in.`;
    }
    

    else if (userMessage.toLowerCase().includes("college")) {
        botResponse = `Here is the list of colleges :
        1. Government Polytechnic College, Ajmer
    2. Government Polytechnic College, Alwar
    3. Government Polytechnic College Bagidora, Banswara
    4. Government Polytechnic College, Banswara
    5. Government Polytechnic College, Baran
    6. Government Polytechnic College, Barmer
    7. Government Polytechnic College, Bikaner
    8. Shri Gokul Verma Government Polytechnic College, Bharatpur
    9. Government Polytechnic College Bhilwara
    10. Government Polytechnic College, Bundi
    11. Government Polytechnic College Chittorgarh
    12. Government Polytechnic College, Churu`;
    }
    else if (userMessage.toLowerCase().includes("curriculum")) {
        botResponse = `*Rajasthan Technical Education (RTE) Curriculum:*

    1. *Existing Curriculum:*
   - Applied for students admitted in 2023-24 and 2024-25.
   - No MOOCs included.

    2 . *New Curriculum:*
   - Starts from 2024-25, includes NEP 2020.

    3. *Credit Structure:*
   - Total of 102 credits: 28 for core, 26 for electives.
   - Up to 24 credits from skill training and interdisciplinary courses.

    For more details, contact RTU support at info@rtu.ac.in.`;
    }
    else     if (userMessage.toLowerCase().includes("thank you")) {
        botResponse = "You're welcome! If you have any more questions or need further assistance, feel free to ask. 😊";
    }  
    
    addMessage(botResponse, 'bot');
}



/*Slider Movement*/

const slider=document.querySelector("#slider")
const left=document.querySelector("#left")
const right=document.querySelector("#right");

const img=document.querySelectorAll("#slider img")
        
let slideNumber=1;

right.addEventListener('click',()=>{
    if(slideNumber<img.length){
        slider.style.transform=`translateX(-${slideNumber*100}%)`;
        slideNumber++;
    }
    else{
        slider.style.transform=`translateX(0px)`;
        slideNumber=1;
    }
 })

left.addEventListener('click',()=>{
    if(slideNumber>1){
        slider.style.transform=`translateX(-${(slideNumber-2)*100}%)`;
        slideNumber--;
    }
    else{
        slider.style.transform=`translateX(-${(img.length-1)*100}%)`;
         slideNumber=img.length;
    }
})

  
//Login Page

const login=document.querySelector("#login");
const loginpage=document.querySelector("#login_Page");
const main=document.querySelector("#main");


const closeButton=document.querySelector("#close_login")

login.addEventListener('click',()=>{
    loginpage.style.display="initial";
    // document.querySelector("#main").style.filter="blur(8px)";
})

closeButton.addEventListener('click',()=>{
    loginpage.style.display="none";
})