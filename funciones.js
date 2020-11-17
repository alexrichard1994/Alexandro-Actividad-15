const productos =["laptop","telefono","televisor",]

const enmayuscula = productos.map(productos=>productos.toUpperCase())

const conT = productos.filter(productos=>productos[0]==='t')

const total = productos.reduce((total, productos) => total + productos.length, 0)

console.table(enmayuscula)

console.table(conT)

console.log(total)