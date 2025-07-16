// =======================================================
// SECCIÓN 1. MANIPULACIÓN BÁSICA DE ARRAYS (IN-PLACE)
// =======================================================
console.log("=======================================================");
console.log("SECCIÓN 1. MANIPULACIÓN BÁSICA DE ARRAYS (IN-PLACE)");
console.log("=======================================================");

// 1. Invertir un array 
/**
 * Invierte un array en su lugar sin usar el método reverse(). 
 * @param {Array} arr El array a invertir. 
 * @returns {Array} El mismo array invertido. 
 */
const invertir = (arr) => {
    let inicio = 0;
    let fin = arr.length - 1;

    while (inicio < fin) {
        const temp = arr[inicio];
        arr[inicio] = arr[fin];
        arr[fin] = temp;

        inicio++;
        fin--;
    }
    return arr;
};

// Ejemplo de uso:
let miArrayInvertir = [1, 2, 3, 4, 5];
console.log("1. Array original (invertir):", miArrayInvertir);
invertir(miArrayInvertir);
console.log("   Array invertido (invertir):", miArrayInvertir);


// 2. Eliminar duplicados
/**
 * Implementa sin Duplicados (arr) que devuelva un nuevo array sin
 * elementos repetidos usando solo bucles y un objeto como mapa de frecuencia (sin Set).
 */
const sinDuplicados = (arr) => {
    const vistos = {};
    const resultado = [];

    for (const item of arr) {
        if (!vistos[item]) {
            vistos[item] = true;
            resultado.push(item);
        }
    }
    return resultado;
};

// Ejemplo de uso:
let arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5, 1];
console.log("2. Array con duplicados (eliminar duplicados):", arrayConDuplicados);
let arraySinDuplicados = sinDuplicados(arrayConDuplicados);
console.log("   Array sin duplicados (eliminar duplicados):", arraySinDuplicados);

// 3. Contar ocurrencias 
/**
 * Cuenta las ocurrencias de cada elemento en un array y las retorna como un objeto. 
 * @param {Array} arr El array a procesar. 
 * @returns {Object} Un objeto con cada elemento como clave y su conteo como valor. 
 */
const contarOcurrencias = (arr) => {
    const ocurrencias = {};
    for (const item of arr) {
        ocurrencias[item] = (ocurrencias[item] || 0) + 1;
    }
    return ocurrencias;
};

// Ejemplo de uso:
let datosOcurrencias = ['a', 'b', 'a', 'c', 'b', 'a', 'd', 'b'];
console.log("3. Array de datos (contar ocurrencias):", datosOcurrencias);
console.log("   Ocurrencias (contar ocurrencias):", contarOcurrencias(datosOcurrencias));

// 4. Suma de pares adyacentes 
/**
 * Retorna un nuevo array con la suma de cada par adyacente del array numérico de entrada. 
 * @param {Array<number>} arr El array numérico. 
 * @returns {Array<number>} Un nuevo array con las sumas adyacentes. 
 */
const sumaParesAdyacentes = (arr) => {
    const resultado = [];
    for (let i = 0; i < arr.length - 1; i++) {
        resultado.push(arr[i] + arr[i + 1]);
    }
    return resultado;
};

// Ejemplo de uso:
let numerosAdyacentes = [1, 2, 3, 4, 5];
console.log("4. Array original (suma adyacentes):", numerosAdyacentes);
console.log("   Suma de pares adyacentes:", sumaParesAdyacentes(numerosAdyacentes));

// 5. Filtrar palabras por longitud 
/**
 * Filtra un array de strings, devolviendo solo aquellas palabras con longitud mayor o igual a n. 
 * @param {Array<string>} palabras El array de strings a filtrar. 
 * @param {number} n La longitud mínima requerida. 
 * @returns {Array<string>} Un nuevo array con las palabras filtradas. 
 */
const filtrarPorLongitud = (palabras, n) => {
    const resultado = [];
    for (const palabra of palabras) {
        if (palabra.length >= n) {
            resultado.push(palabra);
        }
    }
    return resultado;
};

// Ejemplo de uso:
let listaPalabras = ["sol", "luna", "estrella", "mar", "cielo"];
console.log("5. Palabras originales (filtrar por longitud):", listaPalabras);
console.log("   Palabras con longitud >= 4:", filtrarPorLongitud(listaPalabras, 4));


// =======================================================
// SECCIÓN 2. OBJETOS Y MÉTODOS
// =======================================================
console.log("\n=======================================================");
console.log("SECCIÓN 2. OBJETOS Y MÉTODOS");
console.log("=======================================================");

// 6. Catálogo de libros 
/**
 * Crea un objeto libro con sus propiedades y métodos. 
 * @param {string} titulo El título del libro. 
 * @param {string} autor El autor del libro. 
 * @param {number} año El año de publicación del libro. 
 * @returns {Object} Un objeto libro. 
 */
const crearLibro = (titulo, autor, año) => {
    return {
        titulo: titulo,
        autor: autor,
        año: año,
        resumen: function() {
            return `${this.titulo} por ${this.autor}, publicado en ${this.año}.`;
        },
        esAntiguo: function() {
            const añoActual = new Date().getFullYear();
            return (añoActual - this.año) > 20;
        }
    };
};

// Ejemplo de uso:
const libro1 = crearLibro("Cien años de soledad", "Gabriel García Márquez", 1967);
console.log("6. Resumen libro1:", libro1.resumen());
console.log("   ¿Es libro1 antiguo (1967)?", libro1.esAntiguo());
const libro3 = crearLibro("JavaScript moderno", "Programador Anónimo", 2023);
console.log("   ¿Es libro3 antiguo (2023)?", libro3.esAntiguo());


// 7. Conversor de divisas 
/**
 * Objeto para realizar conversiones de divisas. 
 */
const cajaCambio = {
    tasas: { // Tasas de conversión base a USD (por ejemplo)
        USD: 1,
        EUR: 1.08,
        GBP: 1.27,
        JPY: 0.0067,
        COP: 0.00026,
    },

    /**
     * Convierte un monto de una divisa a otra. 
     * @param {number} monto El monto a convertir. 
     * @param {string} de La divisa de origen (ej. 'USD', 'EUR'). 
     * @param {string} a La divisa de destino (ej. 'USD', 'EUR'). 
     * @returns {number|string} El monto convertido o un mensaje de error. 
     */
    convertir: function(monto, de, a) {
        const fromUpper = de.toUpperCase();
        const toUpper = a.toUpperCase();

        if (!this.tasas[fromUpper] || !this.tasas[toUpper]) {
            return "Error: Una o ambas divisas no están soportadas.";
        }

        const montoEnBase = monto * this.tasas[fromUpper];
        const montoConvertido = montoEnBase / this.tasas[toUpper];

        return parseFloat(montoConvertido.toFixed(2));
    },

    /**
     * Actualiza la tasa de cambio para una divisa específica. 
     * @param {string} moneda La divisa cuya tasa se va a actualizar (ej. 'EUR'). 
     * @param {number} nuevaTasa La nueva tasa de cambio. 
     * @returns {string} Mensaje de confirmación o error. 
     */
    actualizarTasa: function(moneda, nuevaTasa) {
        const monedaUpper = moneda.toUpperCase();
        if (typeof nuevaTasa !== 'number' || nuevaTasa <= 0) {
            return "Error: La nueva tasa debe ser un número positivo.";
        }
        this.tasas[monedaUpper] = nuevaTasa;
        return `Tasa de ${monedaUpper} actualizada a ${nuevaTasa}.`;
    },

    getTasas: function() {
        return this.tasas;
    }
};

// Ejemplo de uso:
console.log("7. 10 USD a EUR:", cajaCambio.convertir(10, 'USD', 'EUR'));
console.log("   Actualizar tasa EUR:", cajaCambio.actualizarTasa('EUR', 1.10));
console.log("   10 USD a EUR (después de actualizar):", cajaCambio.convertir(10, 'USD', 'EUR'));


// 8. Contador con cierre 
/**
 * Crea un objeto contador que encapsula su valor usando un cierre. 
 * @param {number} inicial El valor inicial del contador. 
 * @returns {Object} Un objeto con métodos para incrementar, decrementar y obtener el valor. 
 */
const crearContador = (inicial) => {
    let contador = inicial;

    return {
        inc: function() {
            contador++;
        },
        dec: function() {
            contador--;
        },
        valor: function() {
            return contador;
        }
    };
};

// Ejemplo de uso:
const miContador = crearContador(5);
console.log("8. Valor inicial contador:", miContador.valor());
miContador.inc();
miContador.inc();
console.log("   Después de 2 incrementos:", miContador.valor());
miContador.dec();
console.log("   Después de 1 decremento:", miContador.valor());

// 9. Inventario de productos 
let inventario = [
    { id: 1, nombre: "Laptop", stock: 10 },
    { id: 2, nombre: "Mouse", stock: 25 },
    { id: 3, nombre: "Teclado", stock: 0 },
    { id: 4, nombre: "Monitor", stock: 7 },
    { id: 5, nombre: "Webcam", stock: 12 },
];

/**
 * Busca un producto por su ID en el inventario. 
 * @param {number} id El ID del producto a buscar. 
 * @returns {Object|undefined} El objeto producto si se encuentra, o undefined. 
 */
const buscarProductoPorId = (id) => {
    for (const producto of inventario) {
        if (producto.id === id) {
            return producto;
        }
    }
    return undefined;
};

/**
 * Vende unidades de un producto, restando del stock. 
 * @param {number} id El ID del producto. 
 * @param {number} cantidad La cantidad a vender. 
 * @returns {string} Mensaje de éxito o error. 
 */
const venderUnidades = (id, cantidad) => {
    const producto = buscarProductoPorId(id);
    if (!producto) {
        return "Error: Producto no encontrado.";
    }
    if (cantidad <= 0) {
        return "Error: La cantidad a vender debe ser positiva.";
    }
    if (producto.stock < cantidad) {
        return `Error: Stock insuficiente. Solo quedan ${producto.stock} unidades de ${producto.nombre}.`;
    }
    producto.stock -= cantidad;
    return `Venta exitosa: ${cantidad} unidades de ${producto.nombre} vendidas. Stock actual: ${producto.stock}.`;
};

/**
 * Lista solo los productos que tienen stock disponible (> 0). 
 * @returns {Array<Object>} Un array de productos con stock disponible. 
 */
const listarProductosConStock = () => {
    const productosDisponibles = [];
    for (const producto of inventario) {
        if (producto.stock > 0) {
            productosDisponibles.push(producto);
        }
    }
    return productosDisponibles;
};

// Ejemplo de uso:
console.log("9. Inventario inicial:", inventario);
console.log("   Buscar producto con ID 2:", buscarProductoPorId(2));
console.log("   Vender 3 laptops (ID 1):", venderUnidades(1, 3));
console.log("   Productos con stock > 0:", listarProductosConStock());


// 10. Juego de naipes simplificado 
/**
 * Crea un objeto carta con sus propiedades y un método toString(). 
 * @param {string} palo El palo de la carta (ej. 'Corazones', 'Picas'). 
 * @param {string|number} valor El valor de la carta (ej. 'As', 'Rey', 7). 
 * @returns {Object} Un objeto carta. 
 */
const crearCarta = (palo, valor) => {
    return {
        palo: palo,
        valor: valor,
        toString: function() {
            return `${this.valor} de ${this.palo}`;
        }
    };
};

/**
 * Genera una baraja estándar de 52 cartas sin repetir. 
 * @returns {Array<Object>} Un array de objetos carta. 
 */
const generarBaraja = () => {
    const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
    const valores = ["As", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jota", "Reina", "Rey"];
    const baraja = [];

    for (const palo of palos) {
        for (const valor of valores) {
            baraja.push(crearCarta(palo, valor));
        }
    }
    return baraja;
};

// Ejemplo de uso:
const miBaraja = generarBaraja();
console.log("10. Número total de cartas en la baraja:", miBaraja.length);
console.log("    Primera carta:", miBaraja[0].toString());
console.log("    Última carta:", miBaraja[51].toString());


// =======================================================
// SECCIÓN 3. BUCLES Y LÓGICA EXTENDIDO
// =======================================================
console.log("\n=======================================================");
console.log("SECCIÓN 3. BUCLES Y LÓGICA EXTENDIDO");
console.log("=======================================================");

// 11. FizzBuzz Bazz 
/**
 * Implementación de FizzBuzzBazz del 1 al 100. 
 * Imprime "Fizz" para múltiplos de 3, "Buzz" para múltiplos de 5, 
 * "Bazz" para múltiplos de 7, y sus combinaciones. 
 */
const fizzBuzzBazz = () => {
    console.log("11. FizzBuzzBazz (solo se muestran algunos ejemplos, descomentar para ver toda la salida):");
    for (let i = 1; i <= 15; i++) { // Limitado a 15 para no saturar la consola
        let salida = "";
        if (i % 3 === 0) {
            salida += "Fizz";
        }
        if (i % 5 === 0) {
            salida += "Buzz";
        }
        if (i % 7 === 0) {
            salida += "Bazz";
        }
        console.log(`    ${i}: ${salida || i}`);
    }
};
fizzBuzzBazz();

// 12. Pirámide de números 
/**
 * Imprime una pirámide de números con 'n' filas. 
 * @param {number} n El número de filas de la pirámide. 
 */
const piramideNumeros = (n) => {
    console.log(`12. Pirámide de ${n} filas:`);
    for (let i = 1; i <= n; i++) {
        let fila = "";
        for (let j = 1; j <= i; j++) {
            fila += j;
        }
        console.log(`    ${fila}`);
    }
};
piramideNumeros(5);


// 13. Número perfecto 
/**
 * Verifica si un número es perfecto. 
 * Un número perfecto es aquel cuya suma de sus divisores propios (excluyéndose a sí mismo) es igual al número. 
 * @param {number} num El número a verificar. 
 * @returns {boolean} True si el número es perfecto, false en caso contrario. 
 */
const esNumeroPerfecto = (num) => {
    if (num <= 0) {
        return false;
    }
    let sumaDivisores = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === num;
};

// Ejemplo de uso:
console.log("13. ¿Es 6 un número perfecto?", esNumeroPerfecto(6));
console.log("    ¿Es 28 un número perfecto?", esNumeroPerfecto(28));
console.log("    ¿Es 12 un número perfecto?", esNumeroPerfecto(12));

// 14. Serie de Fibonacci hasta N 
/**
 * Genera los términos de la serie de Fibonacci hasta un número N. 
 * @param {number} N El límite superior para los términos de Fibonacci. 
 * @returns {Array<number>} Un array con los términos de Fibonacci <= N. 
 */
const fibonacciHastaN = (N) => {
    const serie = [];
    let a = 0;
    let b = 1;

    if (N < 0) return serie;
    if (a <= N) serie.push(a);
    if (b <= N && N !== 0) serie.push(b); // No agregar 1 si N es 0 y ya agregamos 0

    let siguiente = a + b;
    while (siguiente <= N) {
        serie.push(siguiente);
        a = b;
        b = siguiente;
        siguiente = a + b;
    }
    return serie;
};

// Ejemplo de uso:
console.log("14. Fibonacci hasta 10:", fibonacciHastaN(10));
console.log("    Fibonacci hasta 0:", fibonacciHastaN(0));

// 15. Máximo producto de tres 
/**
 * Encuentra el mayor producto posible de tres valores en un array de enteros. 
 * Considera que los números negativos pueden generar productos grandes. 
 * @param {Array<number>} arr El array de enteros. 
 * @returns {number} El mayor producto de tres valores. 
 */
const maximoProductoDeTres = (arr) => {
    const n = arr.length;
    if (n < 3) {
        throw new Error("El array debe contener al menos 3 números.");
    }
    arr.sort((a, b) => a - b); // Ordena de forma ascendente

    // Caso 1: Los tres números más grandes
    const producto1 = arr[n - 1] * arr[n - 2] * arr[n - 3];
    // Caso 2: Los dos números más pequeños (negativos) y el número más grande
    const producto2 = arr[0] * arr[1] * arr[n - 1];

    return Math.max(producto1, producto2);
};

// Ejemplo de uso:
console.log("15. Max producto de [1, 2, 3, 4]:", maximoProductoDeTres([1, 2, 3, 4]));
console.log("    Max producto de [-10, -5, 1, 2, 3]:", maximoProductoDeTres([-10, -5, 1, 2, 3]));
console.log("    Max producto de [-1, -2, -3]:", maximoProductoDeTres([-1, -2, -3]));


// =======================================================
// SECCIÓN 4. DESTRUCTURING Y SPREAD/REST
// =======================================================
console.log("\n=======================================================");
console.log("SECCIÓN 4. DESTRUCTURING Y SPREAD/REST");
console.log("=======================================================");

// 16. Fusionar configuraciones 
/**
 * Combina dos objetos de configuración (defaults y overrides), dando prioridad a los overrides. 
 * @param {Object} defaults El objeto con los valores por defecto. 
 * @param {Object} overrides El objeto con los valores que sobrescriben los por defecto. 
 * @returns {Object} Un nuevo objeto con la configuración fusionada. 
 */
const mezclarConfigs = (defaults, overrides) => {
    return { ...defaults, ...overrides };
};

// Ejemplo de uso:
const configDefault = { tema: "claro", idioma: "es", notificaciones: true };
const configUsuario = { tema: "oscuro", notificaciones: false, api_key: "abc123" };
const configFinal = mezclarConfigs(configDefault, configUsuario);
console.log("16. Configuración final (fusionada):", configFinal);


// 17. Reordenar coordenadas 
/**
 * Convierte un array de arrays de coordenadas a un array de objetos de coordenadas. 
 * Utiliza for...of y destructuring. 
 * @param {Array<Array<number>>} coordenadasArr El array de arrays de coordenadas (ej. [[1,2], [3,4]]). 
 * @returns {Array<Object>} Un array de objetos de coordenadas (ej. [{x:1, y:2}, {x:3, y:4}]). 
 */
const reordenarCoordenadas = (coordenadasArr) => {
    const coordenadasObjeto = [];
    for (const [x, y] of coordenadasArr) {
        coordenadasObjeto.push({ x, y });
    }
    return coordenadasObjeto;
};

// Ejemplo de uso:
const puntosArray = [[10, 20], [30, 40]];
console.log("17. Coordenadas en formato objeto:", reordenarCoordenadas(puntosArray));

// 18. Separar primeros y resto 
/**
 * Recibe un array y devuelve un objeto con el primer elemento, el segundo y el resto. 
 * @param {Array} arr El array de entrada. 
 * @returns {Object} Un objeto con { primero, segundo, resto }. 
 */
const separarPrimerosYResto = (arr) => {
    const [primero, segundo, ...resto] = arr;
    return { primero, segundo, resto };
};

// Ejemplo de uso:
let miArrayCompleto = [10, 20, 30, 40, 50];
const { primero, segundo, resto } = separarPrimerosYResto(miArrayCompleto);
console.log("18. Primero:", primero, "Segundo:", segundo, "Resto:", resto);


// 19. Clonar y actualizar 
/**
 * Clona un objeto usuario y actualiza su email, demostrando que el original no cambia. 
 * @param {Object} usuarioOriginal El objeto usuario original. 
 * @param {string} nuevoEmail El nuevo email para el usuario clonado. 
 * @param {Object} El nuevo objeto usuario con el email actualizado. 
 */
const clonarYActualizarUsuario = (usuarioOriginal, nuevoEmail) => {
    const usuarioClonado = { ...usuarioOriginal };
    usuarioClonado.email = nuevoEmail;
    return usuarioClonado;
};

// Ejemplo de uso:
const usuarioExistente = { nombre: "Alice", email: "alice@example.com" };
console.log("19. Usuario original ANTES:", usuarioExistente);
const usuarioActualizado = clonarYActualizarUsuario(usuarioExistente, "alice.new@example.com");
console.log("    Usuario clonado y actualizado:", usuarioActualizado);
console.log("    Usuario original DESPUÉS (no cambia email):", usuarioExistente);


// 20. Swap de variables 
/**
 * Intercambia los valores de dos variables sin usar una variable temporal, 
 * utilizando desestructuración de arrays. 
 * @param {*} var1 La primera variable. 
 * @param {*} var2 La segunda variable. 
 * @returns {Array} Un array con los valores intercambiados [var2, var1]. 
 */
const swapVariables = (var1, var2) => {
    [var1, var2] = [var2, var1];
    return [var1, var2];
};

// Ejemplo de uso:
let x = 10;
let y = 5;
console.log(`20. Antes del swap: x = ${x}, y = ${y}`);
[x, y] = swapVariables(x, y);
console.log(`    Después del swap: x = ${x}, y = ${y}`);


// =======================================================
// SECCIÓN 5. ALGORITMOS INTERMEDIOS
// =======================================================
console.log("\n=======================================================");
console.log("SECCIÓN 5. ALGORITMOS INTERMEDIOS");
console.log("=======================================================");

// 21. Anagrama 
/**
 * Normaliza una cadena de texto para la comparación de anagramas.
 * Elimina espacios, convierte a minúsculas y ordena los caracteres.
 * @param {string} str La cadena a normalizar.
 * @returns {string} La cadena normalizada.
 */
const normalizarCadena = (str) => {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '')
        .split('')
        .sort()
        .join('');
};

/**
 * Verifica si dos cadenas son anagramas. 
 * Ignora espacios y mayúsculas/minúsculas. 
 * @param {string} a La primera cadena. 
 * @param {string} b La segunda cadena. 
 * @returns {boolean} True si son anagramas, false en caso contrario. 
 */
const esAnagrama = (a, b) => {
    return normalizarCadena(a) === normalizarCadena(b);
};

// Ejemplo de uso:
console.log("21. ¿'listen' y 'silent' son anagramas?", esAnagrama("listen", "silent"));
console.log("    ¿'Debit card' y 'Bad credit' son anagramas?", esAnagrama("Debit card", "Bad credit"));


// 22. Romanos a enteros 
/**
 * Convierte un número romano a su valor entero. 
 * Asume una entrada romana válida para un rango razonable (ej. hasta 3999). 
 * @param {string} romano La cadena que representa el número romano. 
 * @returns {number} El valor entero del número romano. 
 */
const romanoAEntero = (romano) => {
    const valoresRomanos = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let total = 0;
    for (let i = 0; i < romano.length; i++) {
        const actual = valoresRomanos[romano[i]];
        const siguiente = valoresRomanos[romano[i + 1]];
        if (siguiente && actual < siguiente) {
            total -= actual;
        } else {
            total += actual;
        }
    }
    return total;
};

// Ejemplo de uso:
console.log("22. XIV (14):", romanoAEntero("XIV"));
console.log("    MCMXCIV (1994):", romanoAEntero("MCMXCIV"));


// 23. Compresión RLE (Run Length Encoding) 
/**
 * Implementa el algoritmo Run Length Encoding (RLE) para una cadena de texto. 
 * Comprime secuencias de caracteres repetidos. 
 * @param {string} str La cadena a comprimir. 
 * @returns {string} La cadena comprimida en formato RLE. 
 */
const compresionRLE = (str) => {
    if (str.length === 0) {
        return "";
    }
    let resultado = "";
    let i = 0;
    while (i < str.length) {
        const caracterActual = str[i];
        let conteo = 0;
        let j = i;
        while (j < str.length && str[j] === caracterActual) {
            conteo++;
            j++;
        }
        resultado += caracterActual + conteo;
        i = j;
    }
    return resultado;
};

// Ejemplo de uso:
console.log("23. 'aaabbc' ->", compresionRLE("aaabbc"));
console.log("    'wwwwaaadexxxxxx' ->", compresionRLE("wwwwaaadexxxxxx"));


// 24. Validación de paréntesis 
/**
 * Valida si una cadena tiene paréntesis, corchetes y llaves balanceados. 
 * Utiliza una pila (stack) para verificar el orden de apertura y cierre. 
 * @param {string} str La cadena a validar. 
 * @returns {boolean} True si los paréntesis están balanceados, false en caso contrario. 
 */
const validarParentesis = (str) => {
    const pila = [];
    const mapaParentesis = {
        '(': ')', '[': ']', '{': '}'
    };
    for (const char of str) {
        if (mapaParentesis[char]) { // Es un paréntesis de apertura
            pila.push(char);
        } else { // Es un paréntesis de cierre
            if (pila.length === 0) {
                return false;
            }
            const ultimoAbierto = pila.pop();
            if (mapaParentesis[ultimoAbierto] !== char) {
                return false;
            }
        }
    }
    return pila.length === 0;
};

// Ejemplo de uso:
console.log("24. '()[]{}':", validarParentesis("()[]{}"));
console.log("    '(]':", validarParentesis("(]"));
console.log("    '{[()]}':", validarParentesis("{[()]}"));


// 25. Ruta mínima en matriz 0-1 
/**
 * Encuentra la ruta más corta en una matriz de 0s y 1s desde un punto de inicio a un punto de destino, 
 * usando BFS (Breadth-First Search). 
 * @param {Array<Array<number>>} matriz La matriz 0-1 (0=libre, 1=bloqueo). 
 * @param {Array<number>} inicio Coordenadas de inicio [fila, columna]. 
 * @param {Array<number>} destino Coordenadas de destino [fila, columna]. 
 * @returns {number} La longitud de la ruta más corta, o -1 si no hay ruta. 
 */
const rutaMinimaBFS = (matriz, inicio, destino) => {
    const filas = matriz.length;
    if (filas === 0) return -1;
    const cols = matriz[0].length;
    if (cols === 0) return -1;

    const direcciones = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Arriba, Abajo, Izquierda, Derecha

    const cola = [[inicio[0], inicio[1], 0]];
    const visitado = new Set();
    visitado.add(`${inicio[0]},${inicio[1]}`);

    if (matriz[inicio[0]][inicio[1]] === 1 || matriz[destino[0]][destino[1]] === 1) return -1;
    if (inicio[0] === destino[0] && inicio[1] === destino[1]) return 0;

    while (cola.length > 0) {
        const [filaActual, colActual, distActual] = cola.shift();

        for (const [df, dc] of direcciones) {
            const nuevaFila = filaActual + df;
            const nuevaCol = colActual + dc;

            if (
                nuevaFila >= 0 && nuevaFila < filas &&
                nuevaCol >= 0 && nuevaCol < cols &&
                matriz[nuevaFila][nuevaCol] === 0 &&
                !visitado.has(`${nuevaFila},${nuevaCol}`)
            ) {
                if (nuevaFila === destino[0] && nuevaCol === destino[1]) {
                    return distActual + 1;
                }
                visitado.add(`${nuevaFila},${nuevaCol}`);
                cola.push([nuevaFila, nuevaCol, distActual + 1]);
            }
        }
    }
    return -1;
};

// Ejemplo de uso:
const miMatriz = [
    [0, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 1, 1, 0]
];
console.log("25. Ruta de [0,0] a [0,3]:", rutaMinimaBFS(miMatriz, [0, 0], [0, 3]));
console.log("    Ruta de [0,0] a [3,3]:", rutaMinimaBFS(miMatriz, [0, 0], [3, 3]));


// =======================================================
// SECCIÓN 6. INTEGRACIÓN Y MINI-PROYECTOS
// =======================================================
console.log("\n=======================================================");
console.log("SECCIÓN 6. INTEGRACIÓN Y MINI-PROYECTOS");
console.log("=======================================================");

// 26. Gestor de tareas en consola 
let tareas = [];
let nextIdTarea = 1;

/**
 * Agrega una nueva tarea al gestor. 
 * @param {string} descripcion La descripción de la tarea. 
 * @returns {Object} La tarea recién agregada. 
 */
const agregarTarea = (descripcion) => {
    const nuevaTarea = {
        id: nextIdTarea++,
        desc: descripcion,
        done: false
    };
    tareas.push(nuevaTarea);
    console.log(`26. Tarea agregada: "${descripcion}" (ID: ${nuevaTarea.id})`);
    return nuevaTarea;
};

/**
 * Marca una tarea como completada. 
 * @param {number} id El ID de la tarea a completar. 
 * @returns {string} Mensaje de estado. 
 */
const completarTarea = (id) => {
    const tarea = tareas.find(t => t.id === id);
    if (!tarea) return `Error: Tarea con ID ${id} no encontrada.` ;
    if (tarea.done) return `La tarea "${tarea.desc}" (ID: ${id}) ya estaba completada.`;
    tarea.done = true;
    return `Tarea "${tarea.desc}" (ID: ${id}) marcada como completada.`;
};

/**
 * Elimina una tarea del gestor. 
 * @param {number} id El ID de la tarea a eliminar. 
 * @returns {string} Mensaje de estado. 
 */
const eliminarTarea = (id) => {
    const indice = tareas.findIndex(t => t.id === id);
    if (indice === -1) return `Error: Tarea con ID ${id} no encontrada.`;
    const tareaEliminada = tareas.splice(indice, 1);
    return `Tarea "${tareaEliminada[0].desc}" (ID: ${id}) eliminada.`;
};

/**
 * Lista todas las tareas pendientes (no completadas). 
 * @returns {Array<Object>} Un array de tareas pendientes. 
 */
const listarTareasPendientes = () => {
    const pendientes = tareas.filter(t => !t.done);
    console.log("\n    --- Tareas Pendientes ---");
    if (pendientes.length === 0) {
        console.log("    No hay tareas pendientes.");
    } else {
        pendientes.forEach(tarea => {
            console.log(`    ID: ${tarea.id} - ${tarea.desc}`);
        });
    }
    return pendientes;
};

// Ejemplo de uso:
agregarTarea("Estudiar JavaScript");
agregarTarea("Hacer ejercicio");
agregarTarea("Comprar víveres");
console.log(completarTarea(2));
listarTareasPendientes();


// 27. Simulador carrito de compras 
const catalogoProductos = [
    { id: 'prod001', nombre: "Camiseta", precio: 20.00, stock: 50 },
    { id: 'prod002', nombre: "Pantalón", precio: 45.50, stock: 30 },
    { id: 'prod003', nombre: "Zapatos", precio: 75.00, stock: 20 },
    { id: 'prod004', nombre: "Gorra", precio: 15.00, stock: 100 },
];

let carrito = [];
const IVA_RATE = 0.19;
const DESCUENTO_MINIMO = 100;
const PORCENTAJE_DESCUENTO = 0.05;

/**
 * Agrega un producto al carrito. 
 * @param {string} idProducto El ID del producto a agregar. 
 * @param {number} cantidad La cantidad de unidades a agregar. 
 * @returns {string} Mensaje de estado. 
 */
const agregarAlCarrito = (idProducto, cantidad) => {
    const productoCatalogo = catalogoProductos.find(p => p.id === idProducto);
    if (!productoCatalogo) return `Error: Producto con ID ${idProducto} no encontrado.`;
    if (cantidad <= 0) return `Error: La cantidad debe ser mayor que 0.`;
    if (productoCatalogo.stock < cantidad) return `Error: Stock insuficiente para ${productoCatalogo.nombre}. Disponible: ${productoCatalogo.stock}.`;

    const itemExistente = carrito.find(item => item.idProducto === idProducto);
    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({ idProducto: idProducto, nombre: productoCatalogo.nombre, cantidad: cantidad, precioUnitario: productoCatalogo.precio });
    }
    productoCatalogo.stock -= cantidad;
    return `${cantidad} unidades de ${productoCatalogo.nombre} agregadas al carrito.`;
};

/**
 * Calcula el subtotal del carrito. 
 * @returns {number} El subtotal de todos los ítems. 
 */
const calcularSubtotal = () => {
    let subtotal = 0;
    for (const item of carrito) {
        subtotal += item.cantidad * item.precioUnitario;
    }
    return subtotal;
};

/**
 * Calcula el descuento aplicable al carrito. 
 * @returns {number} El monto del descuento. 
 */
const calcularDescuento = () => {
    const subtotal = calcularSubtotal();
    return subtotal >= DESCUENTO_MINIMO ? subtotal * PORCENTAJE_DESCUENTO : 0;
};

/**
 * Calcula el total del carrito, incluyendo descuento e IVA. 
 * @returns {number} El total final. 
 */
const calcularTotalConIVA = () => {
    const subtotal = calcularSubtotal();
    const descuento = calcularDescuento();
    const subtotalDescontado = subtotal - descuento;
    const iva = subtotalDescontado * IVA_RATE;
    const total = subtotalDescontado + iva;
    return parseFloat(total.toFixed(2));
};

/**
 * Muestra el resumen del carrito. 
 */
const mostrarResumenCarrito = () => {
    console.log("\n    --- Resumen del Carrito ---");
    if (carrito.length === 0) {
        console.log("    El carrito está vacío.");
        return;
    }
    carrito.forEach(item => {
        console.log(`    ${item.nombre} (x${item.cantidad}) - $${(item.cantidad * item.precioUnitario).toFixed(2)}`);
    });
    const subtotal = calcularSubtotal();
    const descuento = calcularDescuento();
    const subtotalDescontado = subtotal - descuento;
    const iva = subtotalDescontado * IVA_RATE;
    const total = calcularTotalConIVA();

    console.log(`    --------------------------`);
    console.log(`    Subtotal:              $${subtotal.toFixed(2)}`);
    if (descuento > 0) {
        console.log(`    Descuento (${(PORCENTAJE_DESCUENTO * 100).toFixed(0)}%):   -$${descuento.toFixed(2)}`);
        console.log(`    Subtotal c/Dto:        $${subtotalDescontado.toFixed(2)}`);
    }
    console.log(`    IVA (${(IVA_RATE * 100).toFixed(0)}%):                  $${iva.toFixed(2)}`);
    console.log(`    Total a pagar:         $${total.toFixed(2)}`);
    console.log(`    --------------------------`);
};

// Ejemplo de uso:
console.log("\n27. --- Simulador de Carrito de Compras ---");
agregarAlCarrito('prod001', 2);
agregarAlCarrito('prod004', 3);
agregarAlCarrito('prod002', 1);
agregarAlCarrito('prod001', 1); // Agrega 1 Camiseta más
mostrarResumenCarrito();


// 28. CRUD en memoria para estudiantes 
let alumnos = [];
let idAlumnoCounter = 1;

/**
 * Crea un nuevo alumno y lo añade al array de alumnos. 
 * @param {string} nombre El nombre del alumno. 
 * @param {number} edad La edad del alumno. 
 * @param {string} curso El curso al que pertenece el alumno. 
 * @returns {Object} El objeto alumno creado. 
 */
const crearAlumno = (nombre, edad, curso) => {
    const nuevoAlumno = { id: idAlumnoCounter++, nombre, edad, curso };
    alumnos.push(nuevoAlumno);
    console.log(`28. Alumno creado: ${nuevoAlumno.nombre} (ID: ${nuevoAlumno.id})`);
    return nuevoAlumno;
};

/**
 * Lee (obtiene) un alumno por su ID o lista todos los alumnos. 
 * @param {number} [id] Opcional. El ID del alumno a buscar. Si no se provee, lista todos. 
 * @returns {Object|Array<Object>|undefined} El alumno si se encuentra por ID, un array de todos los alumnos, o undefined. 
 */
const leerAlumno = (id) => {
    if (id) {
        const alumnoEncontrado = alumnos.find(alumno => alumno.id === id);
        if (alumnoEncontrado) {
            console.log(`    Alumno encontrado (ID: ${id}):`, alumnoEncontrado);
        } else {
            console.log(`    Alumno con ID ${id} no encontrado.`);
        }
        return alumnoEncontrado;
    } else {
        console.log("\n    --- Lista de Alumnos ---");
        if (alumnos.length === 0) {
            console.log("    No hay alumnos registrados.");
        } else {
            alumnos.forEach(alumno => {
                console.log(`    ID: ${alumno.id}, Nombre: ${alumno.nombre}, Edad: ${alumno.edad}, Curso: ${alumno.curso}`);
            });
        }
        return alumnos;
    }
};

/**
 * Actualiza la información de un alumno existente. 
 * @param {number} id El ID del alumno a actualizar. 
 * @param {Object} nuevosDatos Un objeto con los datos a actualizar (ej. { edad: 21, curso: 'Matemáticas' }). 
 * @returns {Object|undefined} El alumno actualizado si se encuentra, o undefined. 
 */
const actualizarAlumno = (id, nuevosDatos) => {
    const alumno = alumnos.find(a => a.id === id);
    if (!alumno) {
        console.log(`    Error: Alumno con ID ${id} no encontrado para actualizar.`);
        return undefined;
    }
    Object.assign(alumno, nuevosDatos);
    console.log(`    Alumno (ID: ${id}) actualizado:`, alumno);
    return alumno;
};

/**
 * Borra un alumno por su ID. 
 * @param {number} id El ID del alumno a borrar. 
 * @returns {string} Mensaje de estado. 
 */
const borrarAlumno = (id) => {
    const indice = alumnos.findIndex(alumno => alumno.id === id);
    if (indice === -1) {
        return `Error: Alumno con ID ${id} no encontrado para borrar.`;
    }
    const alumnoBorrado = alumnos.splice(indice, 1)[0];
    return `Alumno ${alumnoBorrado.nombre} (ID: ${id}) borrado exitosamente.`;
};

// Ejemplo de uso:
crearAlumno("Juan Pérez", 20, "Desarrollo Software");
crearAlumno("Maria García", 22, "Diseño Gráfico");
leerAlumno();
actualizarAlumno(1, { edad: 21, curso: "Desarrollo Web" });
console.log(borrarAlumno(2));
leerAlumno();


// 29. Trivia de preguntas 
const preguntasTrivia = [
    {
        texto: "¿Cuál es la capital de Francia?",
        opciones: ["Berlín", "Madrid", "París", "Roma"],
        respuesta: "París"
    },
    {
        texto: "¿Cuál es el planeta más grande de nuestro sistema solar?",
        opciones: ["Marte", "Júpiter", "Saturno", "Tierra"],
        respuesta: "Júpiter"
    },
    {
        texto: "¿Qué gas respiramos principalmente los humanos?",
        opciones: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Hidrógeno"],
        respuesta: "Oxígeno"
    },
    {
        texto: "¿Quién escribió 'Cien años de soledad'?",
        opciones: ["Julio Cortázar", "Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges"],
        respuesta: "Gabriel García Márquez"
    },
    {
        texto: "¿Cuál es el océano más grande de la Tierra?",
        opciones: ["Atlántico", "Índico", "Antártico", "Pacífico"],
        respuesta: "Pacífico"
    }
];

let puntajeTrivia = 0;
let preguntasRespondidasTrivia = 0;

// Función auxiliar para simular respuestas (solo para este ejercicio de consola)
const obtenerRespuestaSimuladaTrivia = (preguntaIndex) => {
    // Estas respuestas son para que veas la lógica funcionando.
    // 0: París (Correcta)
    // 1: Júpiter (Correcta)
    // 2: Oxígeno -> Responde Nitrógeno (Incorrecta)
    // 3: Gabriel García Márquez (Correcta)
    // 4: Pacífico -> Responde Atlántico (Incorrecta)
    const respuestas = [3, 2, 3, 2, 1]; // Índice de la opción (1-basado)
    return respuestas[preguntaIndex];
};

/**
 * Inicia el juego de trivia. 
 */
const iniciarTrivia = () => {
    puntajeTrivia = 0;
    preguntasRespondidasTrivia = 0;

    console.log("\n29. --- ¡Bienvenido a la Trivia de Conocimientos! ---");
    console.log("    Responde a las siguientes preguntas seleccionando el número de la opción correcta.");

    for (let i = 0; i < preguntasTrivia.length; i++) {
        const preguntaActual = preguntasTrivia[i];
        console.log(`\n    Pregunta ${i + 1}: ${preguntaActual.texto}`);

        preguntaActual.opciones.forEach((opcion, index) => {
            console.log(`    ${index + 1}. ${opcion}`);
        });

        const respuestaSimulada = obtenerRespuestaSimuladaTrivia(i);
        console.log(`    (Simulando respuesta del usuario: Opción ${respuestaSimulada})`); // Mostrar la respuesta simulada

        preguntasRespondidasTrivia++;

        if (preguntaActual.opciones[respuestaSimulada - 1] === preguntaActual.respuesta) {
            console.log("    ¡Correcto!");
            puntajeTrivia++;
        } else {
            console.log(`    Incorrecto. La respuesta correcta era: "${preguntaActual.respuesta}"`);
        }
    }

    console.log("\n    --- ¡Trivia Terminada! ---");
    console.log(`    Has respondido ${preguntasRespondidasTrivia} preguntas.`);
    console.log(`    Tu puntaje final es: ${puntajeTrivia} de ${preguntasTrivia.length}.`);
};

// Ejecutar la trivia
iniciarTrivia();


// 30. Generador de contraseñas seguras 
/**
 * Genera una contraseña aleatoria y segura según los criterios especificados. 
 * @param {number} longitud La longitud deseada de la contraseña. 
 * @param {Object} opciones Objeto con opciones: { mayusculas: boolean, numeros: boolean, simbolos: boolean }. 
 * @returns {string} La contraseña generada. 
 */
const generarContraseñaSegura = (longitud, opciones) => {
    const caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caracteresNumeros = "0123456789";
    const caracteresSimbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let caracteresDisponibles = caracteresMinusculas;

    if (opciones.mayusculas) caracteresDisponibles += caracteresMayusculas;
    if (opciones.numeros) caracteresDisponibles += caracteresNumeros;
    if (opciones.simbolos) caracteresDisponibles += caracteresSimbolos;

    if (longitud <= 0) return "La longitud debe ser un número positivo.";
    if (caracteresDisponibles.length === 0) return "Debe seleccionar al menos una opción (mayúsculas, números, símbolos) para generar la contraseña.";

    let contraseñaGenerada = "";
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresDisponibles.length);
        contraseñaGenerada += caracteresDisponibles[indiceAleatorio];
    }

    // Asegurar que al menos un carácter de cada tipo seleccionado esté presente
    let tieneMayusculas = false;
    let tieneNumeros = false;
    let tieneSimbolos = false;

    for (const char of contraseñaGenerada) {
        if (caracteresMayusculas.includes(char)) tieneMayusculas = true;
        if (caracteresNumeros.includes(char)) tieneNumeros = true;
        if (caracteresSimbolos.includes(char)) tieneSimbolos = true;
    }

    const reemplazarCaracter = (targetSet, charSet) => {
        if (charSet.length > 0) { // Solo reemplazar si hay caracteres disponibles para ese tipo
            const randomIndex = Math.floor(Math.random() * longitud);
            contraseñaGenerada = contraseñaGenerada.substring(0, randomIndex) +
                                  charSet[Math.floor(Math.random() * charSet.length)] +
                                contraseñaGenerada.substring(randomIndex + 1);
        }
    };

    if (opciones.mayusculas && !tieneMayusculas) reemplazarCaracter(contraseñaGenerada, caracteresMayusculas);
    if (opciones.numeros && !tieneNumeros) reemplazarCaracter(contraseñaGenerada, caracteresNumeros);
    if (opciones.simbolos && !tieneSimbolos) reemplazarCaracter(contraseñaGenerada, caracteresSimbolos);

    return contraseñaGenerada;
};

// Ejemplo de uso:
console.log("\n30. --- Generador de Contraseñas Seguras ---");
console.log("    8 caracteres, Mayús, Números:", generarContraseñaSegura(8, { mayusculas: true, numeros: true, simbolos: false }));
console.log("    12 caracteres, Mayús, Números, Símbolos:", generarContraseñaSegura(12, { mayusculas: true, numeros: true, simbolos: true }));
console.log("    10 caracteres, solo Minúsculas:", generarContraseñaSegura(10, { mayusculas: false, numeros: false, simbolos: false }));
console.log("    6 caracteres, solo Números:", generarContraseñaSegura(6, { mayusculas: false, numeros: true, simbolos: false }));
console.log("    Longitud 0:", generarContraseñaSegura(0, { mayusculas: true, numeros: true, simbolos: true }));