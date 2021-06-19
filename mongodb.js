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