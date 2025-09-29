let sol = "okkybumaierpslonassevct"

let inps = document.getElementsByTagName("input")
for(i=0;i<44;i++) inps[i].disabled = true
for(i=1;i<24;i++){
    document.getElementById("l"+i).disabled = false
    document.getElementById("l"+i).addEventListener("input",e=>{
        if(e.data.toLowerCase()==sol.charAt(e.target.id.substring(1)-1)) 
            e.target.style="background:green;"
        else e.target.style="background:red;";
        console.log(e)
    })
}

