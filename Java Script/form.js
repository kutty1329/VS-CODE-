let studentvalues=["Pradeep","tiwin","thilak"]

var insert=()=>
{
    let obj=document.getElementById('user');
    studentvalues.push(obj.value);
    alert("value is added"+obj.value)
}

var list=()=>
{
    let kutty="";
    studentvalues.map((data)=>
       kutty+="<tr><td>"+data+"</td></tr>"
    )
}