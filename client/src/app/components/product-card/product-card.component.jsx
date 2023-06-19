import Badge from "@/app/components/badge/badge.component";

const ProductCard = ({product}) => {
    return (
        <div className="column is-3-widescreen is-4-desktop is-6-tablet">
            <div className="card has-text-centered shadow-none">
                <a href="#!">
                    {
                        product.isNew && <Badge>جدید</Badge>
                    }

                    <img src={product.image} alt={product.name} className="w-100"/>
                    <div className="card-body">
                        <h4 className="is-uppercase mb-3">{product.name}</h4>
                        <p className="h4 help is-dark has-text-weight-light mb-3">{product.short}</p>
                        <p className="h4">${product.price}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProductCard;