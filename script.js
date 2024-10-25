function registrar()

{

//Definindo o salário bruto

const vh = document.getElementById('vh').value;

const th = document.getElementById('th').value;

let sb = vh * th;

//Definindo o INSS

let inss = 0;

if (sb <= 1320 )
    
{

    inss = sb * 0.075 ;

}

else if (sb > 1320 & sb <= 2571.29 )
    
{

    inss = sb * 0.09;

}

else if (sb > 2571 % sb <= 3856.94)

{

 inss = sb * 0.12;

}

else if (sb > 3856.94 & sb <= 7507.49)
    
{

    inss = sb * 0.14;

}

//Definindo o IRPF

let irpf = 0; 

const sd = sb - inss;

if (sd <= 2112 )
    
    {
    
        irpf = 0 ;
    
    }
    
    else if (sd > 2112 & sd <= 2826.65 )
        
    {
    
        irpf = sd * 0.075;
    
    }
    
    else if (sd > 2826.65 % sd <= 3751.06 )
    
    {
    
       irpf = sd * 0.15;
    
    }
    
    else if (sd > 3751.06 & sd <= 4664.68)
        
    {
    
        irpf = sd * 0.225;
    
    }

    else if ( sd > 4664.68 )
        
    {

        irpf = sd * 0.275;

    }

//Definindo Vale Transporte

const vale1 = document.querySelector('input[name = "vale"]:checked').value;

const vale2 = vale1;

var vale = 0;

if(vale2 == "sim")
    
{

    vale = sb * 0.06;

}

else

{

    vale = vale + 0;

}

//Definindo outras deduções

const od = document.getElementById("od").value;

var sl = 0;

sl = sb - inss - irpf - vale - od;

const r =



`
  CÁLCULO TRABALHISTA<br><br>

  Salário Bruto:     ${sb.toFixed(2)}   R$<br>
  Desconto INSS:     - ${inss.toFixed(2)}   R$<br>
  Desconto IRPF:     - ${irpf.toFixed(2)}   R$<br>
  Desconto Vale Transporte:     - ${vale.toFixed(2)}   R$<br>
  Outras deduções:     - ${od}   R$<br><br>

  Salário Líquido:    ${sl.toFixed(2)}   R$<br>
`
;


document.getElementById('r').innerHTML = r;


}


