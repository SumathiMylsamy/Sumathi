function randomString() {  
            
        var chars = "0123457MRSTUaewx";  

        var string_length = 16;  
        var randomstring = '';  
        for (var i=0; i<string_length; i++) {  
            var rnum = Math.floor(Math.random() * 16);  
            randomstring += chars.substring(rnum,rnum+1);  
        }  
        document.getElementById("randomfield").innerHTML = randomstring;  
    } 