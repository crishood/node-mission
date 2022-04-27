const { faker } = require('@faker-js/faker');
const fs = require("fs");
let names = []


const generateNames = () => {

    for(i = 0; i<1000; i++){
        names.push(faker.name.findName())
    }

}

generateNames()

names = names.toString()



try {
    fs.writeFileSync("names.txt", names)
    console.log('Archivo generado exitosamente');
  } catch(err) {
    console.error('Oops');
  }
