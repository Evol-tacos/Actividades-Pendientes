// Declaración de variables

// Usamos let para variables que pueden cambiar
let nombreUsuario; // Para almacenar el nombre del usuario
let edadUsuario;   // Para almacenar la edad del usuario
let cantidadProductos; // Para almacenar la cantidad de productos que desea comprar

// Usamos const para valores que no cambian
const precioProducto = 50; // Precio de un producto (puedes cambiarlo si deseas)

// Entrada del Usuario

// Solicitamos el nombre del usuario
nombreUsuario = prompt("Por favor, ingresa tu nombre:");

// Solicitamos la edad del usuario
edadUsuario = parseInt(prompt("Por favor, ingresa tu edad:"), 10);

// Mostramos un mensaje de bienvenida
console.log(`\u{1F44B} ¡Hola, ${nombreUsuario}! Bienvenido/a al programa.`);

// Operaciones Matemáticas

// Solicitamos la cantidad de productos que el usuario quiere comprar
cantidadProductos = parseInt(prompt("¿Cuántos productos deseas comprar?"), 10);

// Calculamos el costo total sin descuento
let costoTotal = cantidadProductos * precioProducto;

// Si el usuario es mayor de 18 años, aplicamos un descuento del 10%
if (edadUsuario > 18) {
    const descuento = costoTotal * 0.1; // Calculamos el descuento
    costoTotal -= descuento; // Aplicamos el descuento al costo total
    console.log(`Tienes un descuento del 10% por ser mayor de edad.`);
}

// Salida de Datos

// Mostramos la información de manera clara
console.log(`Nombre del usuario: ${nombreUsuario}`);
console.log(`Edad del usuario: ${edadUsuario}`);
console.log(`Cantidad de productos comprados: ${cantidadProductos}`);
console.log(`Precio total a pagar: $${costoTotal.toFixed(2)}`);