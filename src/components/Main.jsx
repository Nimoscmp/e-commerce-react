import Header from "./products/Header";

const Products = () => {

    return (  
        <>
            
            <Header />

            <main>
                <div id="card1">
                    <div>
                        <h1>Título</h1>
                        <span><small>Icono</small></span>
                    </div>
                    <div>
                        <span><del>$100</del></span>
                        <span>$90</span>
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/Camiseta_lisa.jpg" alt="Camiseta"/>
                    </div>
                    <div>
                        <span>Star</span>
                        <span>Star</span>
                        <span>Star</span>
                        <span>Star</span>
                        <span>Star</span>
                    </div>
                    <div>
                        <button>Ver detalles</button>
                        <button>Agregar al carrito</button>
                    </div>
                </div>

                <div id="card1">
                    <div>
                        <h1>Título</h1>
                        <span><small>Icono</small></span>
                    </div>
                    <div>
                        <span><del>$100</del></span>
                        <span>$90</span>
                    </div>
                    <div>
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zegna-camisa-oxford-1549970910.jpg?resize=320:*" alt="Camiseta"/>
                    </div>
                    <div>
                        <span>Star</span>
                        <span>Star</span>
                        <span>Star</span>
                        <span>Star</span>
                        <span>Star</span>
                    </div>
                    <div>
                        <button>Ver detalles</button>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Products;