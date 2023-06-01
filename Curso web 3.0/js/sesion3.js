let nota1, nota2, nota3; 

nota1 = prompt("Ingrese 1ra. Nota") //
nota2 = prompt("Ingrese 2da. Nota") //
nota3 = prompt("Ingrese 3ra, Nota") //
//Convertimos los 3 string en enteros

nota1 = parseInt(nota1)
nota2 = parseInt(nota2)
nota3 = parseInt(nota3)

let pro; 

pro = (nota1 + nota2 + nota3)/3; 

if (pro >=7){
    document.write("Curso Aprobado")
} else {
    if ( pro >= 4){
        document.write("Curso Raspado")
    } else {
        document.write("Curso Reprobado")
    }
} 

