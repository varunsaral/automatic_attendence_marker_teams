class Team {

    constructor(time,att_message) {
        this.time = time;
        this.att_message = att_message;
    }

    attendence() {
        let messageEle = document.querySelector('.cke_wysiwyg_div').firstChild;
        messageEle.innerText = "present";
        let button = document.getElementById('send-message-button');
        button.click();
 
    }

    exitMeeting() {
        let button = document.getElementById('hangup-button');
        button.click();
    }
    getDate() {
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        let res = `${mm}/${dd}/${yyyy}`;
        return res;
    }
    trigger(funcname) {
        let date = this.getDate();
        let triggerTime = new Date(`${date} ${this.time}`).getTime();
        let currentTime = new Date().getTime();
        if(triggerTime > currentTime){
        let sub = triggerTime - currentTime;
        if (funcname == 'attendence')
            setTimeout(this.attendence, sub);
        else
            setTimeout(this.exitMeeting, sub);
        }
        else{
             alert('wrong time');
        }
    }
}

// morning shift attendence

let message = prompt("Enter you attendence message. Example ID , name , present");


let zen_mode = window.confirm("Do you want zen mode? Everything will be default (09:30 , 05:00 , 07:00) else configure yourself by clicking cancel");
let mor_time,eve_time,hang_time;
if(zen_mode){
    mor_time = "09:30:00 PM";
    eve_time = "05:00:00 PM";
    hang_time = "06:59:00 PM"
}
else{
    alert('Make sure you put the details according to the format given')
    mor_time = prompt("Enter then time of morning attendence. Format: HH:MM:SS AM/PM");
    eve_time = prompt("Enter then time of Evening attendence. Format: HH:MM:SS AM/PM");
    hang_time = prompt("Enter then time of Exit meeting. Format: HH:MM:SS AM/PM")
}
 // time of morning attendence 

const morning = new Team(mor_time,message);
morning.trigger("attendence");

//Evening shift attendence
const evening = new Team(eve_time,message);
evening.trigger("attendence");

//Exiting meeting

const hangup = new Team(hang_time,message);
hangup.trigger("exitMeeting");

