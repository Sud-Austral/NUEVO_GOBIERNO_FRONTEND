
// Función para verificar el estado de login
const BASE = "/ALGARROBO_BASE"

function checkLoginStatus() {
    const userDataString = localStorage.getItem('userData'); // trae el string
    const userData = JSON.parse(userDataString); // lo convierte a objeto

    const isLoggedIn = localStorage.getItem('isLoggedIn');    
    
    if (!isLoggedIn || isLoggedIn !== 'true') {
        // Redirigir a la página de login si no está logueado
        //window.location.href = `${BASE}/frontend/index.html`;
        console.log("aka salio");
    }
    const token = localStorage.getItem('authToken'); // trae el string
    return [token,userData];
}

// Función para logout
function logout() {
    // Eliminar la sesión del usuario
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');            
    // Redirigir a la página de login
    window.location.href = `${BASE}/index.html`;
}
 
const salida = checkLoginStatus(); 
const token = salida[0]
const userData = salida[1]
console.log(token,userData)
