const passwordValidate=[
    {
        username:"admin",
        password:"Admin123"

    },

    {
        username:"Omolola",
        password:"Lollipop123"
    },

    {
        username:"editor",
        password:"Editor123"
    }
]

let btn=$("#btn");

$(

    btn.click(function(){
        let user=$("#user").val();
        let pass=$("#pass").val();
        let res=$("#result");
    
        passwordValidate.forEach(function(item){
        if(user == item.username && pass == item.password){
           res.text("** " + user + " is logged in!!! **");
        }

    },
        res.text("** Incorrect input **")  
    )
    })

)

