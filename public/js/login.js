document.querySelector("form#login").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("click")
    const fetchObj = {
        email: document.querySelector("#login-email").value,
        password: document.querySelector("#login-password").value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(fetchObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(!res.ok){
            return alert("Close!")
            
        } else {
           res.json().then(data=>{
               console.log(data);
               location.href = `/posts`
           })
            
        }
    })
})


document.querySelector("form#signup").addEventListener("submit",(e)=>{
    e.preventDefault();
    const fetchObj = {
        email: document.querySelector("#signup-email").value,
        password: document.querySelector("#signup-password").value,
        username: document.querySelector("#signup-username").value,
    }
    fetch("/api/users",{
        method:"POST",
        body:JSON.stringify(fetchObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(!res.ok){
            return alert("Nice try!")
        } else {
            res.json().then(data=>{
                location.href = `/posts`
            })
        }
    })
})