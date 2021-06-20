// Creando una colección
db.products.insert({
    "nombre": "Portátil",
    "precio": 40.2,
    "activo": true,
    "creado_en": new Date("12/12/1999"),
    "datos": [1, 'a', []],
    "fabricante": {
        "nombre": 'dell',
        "version": "xps",
        "localizacion": {
            "ciudad": "usa",
            "direccion": "C/asdhnalsjkjfdas 2, 2-g"
        }
    }
})

// Creando varias inserciones simultaneas en la misma colección
db.products.insert([{
        "nombre": "raton",
        "descripcion": "razer mouse",
        "tags": ["ordenadores", "gaming"],
        "cantidad": 14,
        "creado_en": new Date()
    },
    {
        "nombre": "teclado",
        "descripcion": "tedGem keyboards",
        "tags": ["ordenadores", "gaming"],
        "cantidad": 3,
        "creado_en": new Date()
    }
])

// buscando en la colección un producto cuya propiedad nombre coincida con mouse
const consulta = db.products.find({ nombre: "mouse" })
const consulta = db.products.find({ tags: "ordenadores" })

// buscando en la colección un producto cuya propiedad tags coincida con ordenadores
// y propiedad nombre coincida con teclado
const consulta = db.products.find({ tags: "ordenadores", nombre: "teclado" })

// en este casoal usar findOne, te devuelve el primero de los datos que coincida con
// los parámetros de la búsqueda
const consulta = db.products.findOne({ tags: "ordenadores" })

// enla siguiente consulta le estamos diciendo que, busque en los documentos la propiedad tags que 
// coincida con "ordenadores", además, está filtrando para que del resultado solo le muestre el nombre 
// y la descripción, pero el ID no (para indicar que quieres que se muestre se escribe 1 y para lo contrario 0)
const consulta = db.products.findOne({ tags: "ordenadores" }, { nombre: 1, descripcion: 1, _id: 0 })

// ordenar el resultado por el nombre
const consulta = db.products.find({ tags: "ordenadores" }).sort({nombre: 1})

// me devuelve solo los 2 primeros datos resultados de esa búsqueda (hacer un top 5 por ejemplo)
const consulta = db.products.find().limit(2)

// para contar cuantos documentos tenemos en la colección
const consulta = db.products.count()

// con esta consulta busca todos los datos de la colección recorriédola con el forEach y por cada dato
// imprime por pantalla su propiedad nombre
const consulta = db.products.find().forEach(prod => console.log("Nombre producto: " + prod.nombre))

// actualizar un dato, debemos primero localizar el producto (primer json) y después indicamos el atributo 
// que queremos modificar (segundo json)
const consulta = db.products.update({ price: "99.99" }, { price: "89.99" })

// en este caso añadimos un nuevo atributo a un documento con $set. Para hacerlo, al igual que antes 
// primero se busca donde se desea añadir, y después se añade 
const consulta = db.products.update({ nombre: "portatil" }, { $set: { description: "ACER predator" } })

// si el dato que queremos modificar no existe, podemos crearlo de la siguiente forma. upsert: true le
// indica a la DB que si no existe, lo cree 
const consulta = db.products.update({ nombre: "escritorio" }, { $set: { description: "Escritorio para gamers" } }, { upsert: true })

// incrementar un dato numérico, si por ejemeplo te piden modificar el precio de algo, en lugar de modificar el
// atributo con un update, solo le incrementamos el valor que ya contiene 
const consulta = db.products.update({ nombre: "teclados" }, { $inc: { precio: 10.20 } })

// renombrar una propiedad. Usamos para esto $rename, como siempre primero buscamos el documento que queremos modificar
// y con $rename escribimos el nombre del atributo actual y el nombre del atributo nuevo
const consulta = db.products.update({ nombre: "portatil" }, { $rename: { nombre: "name" } })

// eliminar 1 documento de la colección
const consulta = db.products.remove({ nombre: "portatil" })

// eliminar todos los documentos de la colección
const consulta = db.products.remove({ })
