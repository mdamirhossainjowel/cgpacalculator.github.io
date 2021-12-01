var theorysub=[]
var labsub=[]

function calculator(v,x,y,z)
{
    
    document.getElementById('submit').setAttribute("disabled", "disabled");
    for(let i=1; i<=v;i++)
    {
        var label = document.createElement("label");
        label.innerHTML = "Theory subject "+i;      
        label.className="Label";
        document.body.appendChild(label);

        var input = document.createElement("input"); 
        input.id= "theory"+i;
        input.className="inputfield";
        document.body.appendChild(input);
    }
    for(let i=1; i<=x;i++)
    {
        var label = document.createElement("label");
        label.innerHTML = "Lab subject"+i;
        label.className="Label";      
        document.body.appendChild(label);

        var input = document.createElement("input"); 
        input.id= "lab"+i;
        input.className="inputfield"; 
        document.body.appendChild(input);
    }
   
}

function result(j,k,l,m)
{
    var sum1=0;
    var sum2=0;
    for(let i=1; i<=j;i++)
    {
        let B=document.getElementById("theory"+i).value*l;
        sum1+=B;
        theorysub.push(B);
    }
    for(let i=1; i<=k;i++)
    {
        let C=document.getElementById("lab"+i).value*m;
        sum2+=C
        labsub.push(C);
    }
    let D=(sum1+sum2)/((j*l)+(k*m))
    console.log(theorysub)
    console.log(labsub)


    document.getElementById('show').innerHTML ="Result is: "+D;

}