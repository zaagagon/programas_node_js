const express = require('express');
const session = require('express-session');
const MySQLStore = require('connect-mysql')(session);
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// Configuración de la base de datos
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '123456789',
    database: process.env.DB_NAME || 'validacion',
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        process.exit(1); // Detener la ejecución si no se puede conectar
    }
    console.log('Connected to MySQL');
});

// Inicializar Express
const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de sesiones
const sessionStore = new MySQLStore({ config: dbConfig });

app.use(
    session({
        secret: process.env.SESSION_SECRET || 'secret_key',
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        cookie: { maxAge: 1000 * 60 * 60 }, // 1 hora
    })
);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Rutas

// Página principal (Formulario de login/registro)
app.get('/', (req, res) => {
    res.render('index', { error: null });
});

// Manejar login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.render('index', { error: 'Todos los campos son obligatorios' });
    }

    const query = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) return res.render('index', { error: 'Error en el servidor' });
        if (results.length === 0) return res.render('index', { error: 'Usuario no encontrado. Regístrate.' });

        const user = results[0];
        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) return res.render('index', { error: 'Contraseña incorrecta' });

        req.session.userId = user.id;
        req.session.username = user.username;
        res.redirect('/profile');
    });
});

// Manejar registro
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.render('index', { error: 'Todos los campos son obligatorios' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const query = 'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)';

    db.query(query, [username, email, hashedPassword], (err) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.render('index', { error: 'El correo ya está registrado. Intenta con otro.' });
            }
            return res.render('index', { error: 'Error al registrar usuario. Intente nuevamente.' });
        }
        res.redirect('/');
    });
});

// Página protegida (Perfil)
app.get('/profile', (req, res) => {
    if (!req.session.userId) return res.redirect('/');
    res.render('profile', { username: req.session.username });
});

// Cerrar sesión
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error al cerrar sesión:', err.message);
            return res.status(500).send('Error al cerrar sesión');
        }
        res.redirect('/');
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
