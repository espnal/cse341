const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info:{
        title:'My API Roguin for Contacts',
        description:'Contacts API'
    },
    host: 'cse241-project.onrender.com',
    schemes:['https']
}; 

const outFile = './swagger.json';
const endpointFiles = ['./routes/index.js']

swaggerAutogen(outFile, endpointFiles, doc)