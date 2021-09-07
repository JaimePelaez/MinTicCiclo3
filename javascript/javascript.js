function myFunction() {
    document.getElementById("cambio2").innerHTML = "Y esto tambien lo es.";
}


/* Palabras clave JavaScript
    **Las declaraciones de JavaScript a menudo comienzan con una palabra clave para identificar
    la acción de JavaScript que se debe realizar.

    La siguiente lista enumero algunas de las palabras clave que se utiliza mas amenudo:

    Palabra clave	Descripción

    var-	Declara una variable
    let-	Declara una variable de bloque
    const-	Declara una constante de bloque
    if-	    Marca un bloque de declaraciones que se ejecutarán con una condición.
    switch-	Marca un bloque de sentencias que se ejecutarán en diferentes casos.
    for-	Marca un bloque de sentencias que se ejecutarán en un bucle.
    function	Declara una función
    return-	Sale de una función
    try-	Implementa el manejo de errores en un bloque de declaraciones.

    Las palabras clave de JavaScript son palabras reservadas. Las palabras reservadas
    no se pueden utilizar como nombres para variables. 

    ** Hay 3 formas de declarar una variable de JavaScript:

    Utilizando var
    Utilizando let
    Utilizando const

    Todas las variables de JavaScript deben identificarse con nombres únicos, estos nombres
    únicos se denominan identificadores y las reglas generales para construir nombres 
    para variables (identificadores únicos) son:

    Los nombres pueden contener letras, dígitos, guiones bajos y signos de dólar.
    Los nombres deben comenzar con una letra
    Los nombres también pueden comenzar con $ y _ (pero no los usaremos en este tutorial)
    Los nombres distinguen entre mayúsculas y minúsculas (y e Y son variables diferentes)
    Las palabras reservadas (como las palabras clave de JavaScript) no se pueden usar como nombres
    Los identificadores de JavaScript distinguen entre mayúsculas y minúsculas.

    **ESs importante destacar que las variables a menudo se declaran sin un valor; 
    ya que el valor puede ser algo que deba calcularse o algo que se proporcionará más adelante,
    como una entrada del usuario y a este tipo declarada sin valor tendrá el valor undefined.

    ** La variable let se introdujo en ES6 (2015), pero las variables definidas con let
    no se pueden volver a declarar, tambien las variables definidas con let deben declararse
    antes de su uso y por ultimo las variables definidas con let tienen alcance de bloque. */

    /* No se puede volver a declarar
        Las variables definidas con let no se pueden volver a declarar. */

        let x = "John Doe";
        let x = 0;
        // SyntaxError: 'x' has already been declared
        var x = "John Doe";
        var x = 0;

    /* Alcance del bloque
        Antes de ES6 (2015), JavaScript solo tenía alcance global y alcance de función .
        ES6 introdujo dos nuevas palabras claves JavaScript importantes: lety const.
        Estas dos palabras claves proporcionan Block Scope en JavaScript.
        No se puede acceder a las variables declaradas dentro de un bloque {} desde fuera del 
        bloque: */

        {
            let x = 2;                         
        }
          // x can NOT be used here
        
        {
            var x = 2;
        }
            // x CAN be used here


    /* Redeclaración de variables
        Volver a declarar una variable mediante var puede plantear problemas.
        Redeclarar una variable dentro de un bloque también redeclarará la variable fuera del bloque:*/

        var x = 10;
        // Here x is 10
        {
            var x = 2;
            // Here x is 2
        }
        // Here x is 2    
        
    /* volver a declarar una variable mediante let puede resolver este problema.
        Redeclarar una variable dentro de un bloque no redeclarará la variable fuera del bloque: */    

        let x = 10;
        // Here x is 10
        {
            let x = 2;
            // Here x is 2
        }
        // Here x is 10

    // Se permite volver a declarar una variable de JavaScript varen cualquier lugar de un programa:

        var x = 2;
        // Now x is 2
        var x = 3;
        // Now x is 3
    
    // Con let, NO se permite volver a declarar una variable en el mismo bloque:

        var x = 2;    // Allowed
        let x = 3;    // Not allowed
        
        {
        let x = 2;    // Allowed
        let x = 3     // Not allowed
        }
        
        {
        let x = 2;    // Allowed
        var x = 3     // Not allowed
        }