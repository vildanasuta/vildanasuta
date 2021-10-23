$(document).ready(function(){
    $('.submit').click(function(evt){
        
        var email=$('.email').val()
        var subject=$('.subject').val()
        var message=$('.message').val()
        var status=$('.status')
        status.empty()

       if(email.length>5 || email.includes('@') || email.includes('.')){

        }
        else{
            status.append('<div>Email is not valid!</div>')
            evt.preventDefault();

        }
        if(subject.length>2){
        }
        else{
            status.append('<div>Subject is not valid!</div>')
            evt.preventDefault();


        }
        if(message.length>10){
        }
        else{
            status.append('<div>Message is not valid!</div>')
            evt.preventDefault();

        }

    })
    


})