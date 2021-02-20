var a,b,operator;

function operation(a,b,operator){
    switch (operator){
        case 'x':
            return a*b;
        case '/':
            return a/b;
        case '+':
            return a+b;
        case '-':
            return a-b;
    }
}

function changeNumber(newValue) {
    let resultado;
    var elem = document.getElementById('display');

    if(a == null && typeof(newValue) == 'number'){
        a = newValue;
        elem.innerHTML = newValue;
    } else if(b == null && typeof(newValue) == 'number'){
        b = newValue;
        if(operator == null){
            elem.innerHTML = `${a} ${b}`;
        }else{
            elem.innerHTML = `${a} ${operator} ${b}`;
        }
    } else if(newValue == 'clear'){
        a = null;
        b = null;
        operator = null;
        elem.innerHTML = 'Ingrese un número'; 

    } else if(isNaN(newValue) && newValue != '='){
        operator = newValue;
        elem.innerHTML = `${a} ${operator}`;

    }else if(newValue === '='){
        resultado = operation(a,b,operator);
        elem.innerHTML = `${a} ${operator} ${b} = ${resultado}`;
    }

 }
