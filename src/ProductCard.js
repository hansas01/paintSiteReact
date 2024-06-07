function ProductCard (props) {
    return(
    <div class="container py-3">
        <div className="bg-light border p-4 m-2 rounded-3 shadow-sm">
                <p>{props.product.name}</p>
                <p> {props.product.category}</p>
                <p> {props.product.description}</p>

                    <div className="bg light border p-4 m-2 shadow-sm border-primary rounded-4">
                        <p> {props.product.price}</p>
                    </div>
                    
        </div>
    </div>
  )
}

export default ProductCard