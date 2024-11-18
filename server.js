const express = require('express');
const app = express();

app.set('views', './view')
app.use(express.static('public'));
app.engine('ejs', require('ejs').renderFile);

const portafolio = {
  skills: [
    {
        title: 'Desarrollo Web',
        icon: 'fa-solid fa-code',
        description: 'Experiencia en desarrollo web utilizando tecnologías como HTML, CSS, JavaScript, Node.js, y más.'
    },
    {
        title: 'Python',
        icon: 'fa-brands fa-python',
        description: 'Experiencia en programación con Python para diversas aplicaciones, incluyendo análisis de datos y automatización.'
    },
    {
        title: 'SQL',
        icon: 'fa-solid fa-server',
        description: 'Conocimiento en manejo de base de datos.'
    }
  ] 
}

app.get('/', (req, res) => {
    res.render('index.ejs', portafolio);   
});

app.listen(3000, () => {
    console.log('Servidor en funcionamiento en http://localhost:3000');
});