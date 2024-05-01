const msgArea = document.getElementById('message');
const msgBtn = document.getElementById('msg-btn');
const msgDiv = document.querySelector('.message-box');
const form = document.getElementById('form');
const wrongMove = document.getElementById('goBackDiv');
const messageValue = document.getElementById('message');

const feedbackContent = document.querySelector('.image-sent')


const interimFeedback = document.getElementById('processing-feedback');


msgBtn.addEventListener('click', function() {
    if(msgArea.value == "" || msgArea.value == " "){
       
        form.style.display = 'none';
        wrongMove.style.display = "block";

    }
    else {
        form.style.display = 'none';
        interimFeedback.style.display = "block";
        console.log(messageValue)
        console.log("Its value is: "+messageValue.value)
        sentFeedback("Please wait ...", 2000);
        sentFeedback("still processing...", 3000);
        setTimeout(()=> {
            interimFeedback.style.display = "none";
            feedBackInfo();
        }, 6000);

        setTimeout(()=> {
            feedbackContent.style.display = "none";
            messageValue.value = "";
            form.style.display = 'block';
        }, 8000);
    
    }
});


function sentFeedback(msg, time){
    setTimeout(()=> {
        interimFeedback.innerHTML = "<em>"+msg+"</em>"; 
    }, time);
}

function feedBackInfo() {
    // feedbackContent.style.display = "block";
    // feedbackContent.style.width = "50%";
    // feedbackContent.style.margin = "0 auto";
    feedbackContent.style.display = "flex";
    feedbackContent.style.alignContent = "center";
    feedbackContent.style.flexDirection = "column";
    feedbackContent.style.justifyContent = "center";
}

function goBack() {
    wrongMove.style.display = "none";
    form.style.display = "block";
    
}