# Ecommerce en React.
Proyecto diseñado con React para la entrega final de CoderHouse.<br>
Hecho por Federico Delgado.

# Puesta en marcha del proyecto. 
1- Instalación de las dependencias necesarias con el comando "npm install" desde la terminal.<br>
2- Ejecutar la aplicacion con el comando "npm start".<br> * En caso de no visualizar los productos, ponerse en contacto para modificar los permisos de Firebase.

# Rúbrica de la entrega:
Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles. <br>
Desde el detalle se debe poder ver la descripción, foto y precio e ingresarlo al carrito. <br>
Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total. <br>
Al ingresar su nombre, apellido, teléfono e e-mail (ingresándolo dos veces para corroborar que sea correcto), debe activarse el botón de ‘realizar compra’. <br>
Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden. <br>

# Requisitos
Serán parte de los criterios de evaluación para aprobar el proyecto.<br>
* Inicio: Al momento de ingresar a la app en la ruta base ‘/’
* * Visualizar -como mínimo- un set de productos disponibles para la compra.<br>
* * Contar con algún acceso visible a la vista de carrito que debe alojarse en el route /cart.<br>
* * Acceder a un menú desplegable que contendrá las categorías. Al clickear en una, debe navegar a la lista de productos de la misma mediante un route /categories/:categoryId. Éste invocará la misma vista que el home, pero visualizando sólamente productos de esa categoría.<br>
* Flow: <br> Al clickear un ítem del listado debe navegar a la ruta /item/:id, donde id es el id del item (generado por firebase), y ver la descripción del producto ( foto, precio, selector de cantidad). Si se ingresa a /item/:id y el producto no existe en firebase, debemos responder un mensaje adecuado que indique algo relacionado a que el producto no existe.<br>
* Firebase:
* * Implementar al menos dos colecciones:
* * * items: catálogo completo
* * * * Link para foto (puede almacenarse de modo estático en la página en una subruta /images/:itemid )
* * * * Precio unitario
* * * * Descripción (sólo se ve en detalle)
* * * * Categoria (id a mano para versión estática, o id de firebase para versión dinámica -opcional-)
* * * orders: las órdenes generadas, que deben incluir los productos, descripciones y los precios al momento de la compra. 
* * * * Las órdenes deben poder tener items surtidos, cada uno con su cantidad. Por ejemplo: remeras x 2 y gorra x 1
* * * * id, items, fecha, estado ( por defecto en ‘generada’)
* * * categories (solo para versión dinámica -opcional-): 
* * * * Versión dinámica (-opcional-): Crear una colección de categories en firebase para hidratar el menú y usar los id’s de éstos para linkearlos a sus ítems. Idealmente, categories/:id debería tener una descripción {id: ‘ad43k348j’, key: ‘calzado’, description: ‘Calzado’} para que quede /categories/calzado en lugar de /categories/ad43k348j
* El cart debe ser accesible durante toda la experiencia y tener una indicación de la cantidad de items incluidos agregados (ej. si hay un ítem con dos unidades y un ítem con una unidad, debe decir ‘tres’).
* Checkout mínimo:
* * Items con sus cantidades
* * Total de la orden
* * Input para nombre, apellido y teléfono
* * Input para email y lógica de repetir el email 2 veces (a excepción de que realicen el desafío extra de auth, en ese caso no sería necesario)
* Finalizada la orden, debo recibir mi order id con el id del objeto de firebase.
* La navegabilidad debe ocurrir utilizando el router, y no href’s o location.
* Por cada librería pública extra que utilices, deberás incluir en algún archivo el link al proyecto, y una justificación de por qué agrega valor.

* Estructuracion a incluir.
* * Navbar
* * Menu
* * CartWidget
* * ListItem
* * ItemList
* * ItemDetail
* * ItemQuantitySelector
* * Description
* * AddItemButton
* * Checkout
* * Brief (detalle de compra)
