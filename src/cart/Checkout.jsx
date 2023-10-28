import { useContext, useState } from "react";
import { CartContext } from "../components/Context/Cartcontext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../utils/config"


const Checkout = () => {

    const {cart, totalPrice, vaciarCart} = useContext(CartContext)

    const [pedidoId, setPedidoId] = useState("");

    const { register, handleSubmit, formState:{errors} } = useForm();
    
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: totalPrice(),
        }

        const pedidoRef = collection(database, "pedidos");

        addDoc(pedidoRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCart();
            })

    }

    if (pedidoId) {
        return (
            <div className="CompraFinalizada">
                <h1>¡Muchas gracias por tu compra!</h1>
                <p>Tu numero de orden es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="checkoutContainer">
            <h1>Checkout</h1>
            <form className="formContainer" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Nombre completo" {...register("nombre", {required: true})} />
                {
                    errors.nombre?.type === "required" && (
                        <p>Por favor ingrese su nombre</p>
                    )
                }

                <input type="email" placeholder="Correo electronico" {...register("email", {required: true})} />
                {
                    errors.email?.type === "required" && (
                        <p>Por favor ingrese su correo</p>
                    )
                }

                <input type="number" placeholder="Celular" {...register("celular", {required: true})} />
                {
                    errors.celular?.type === "required" && (
                        <p>Por favor ingrese su celular</p>
                    )
                }

                <input type="number" placeholder="Numero de Tarjeta" {...register("tarjeta", {required: true})} />
                {
                    errors.tarjeta?.type === "required" && (
                        <p>Por favor ingrese el numero de su tarjeta</p>
                    )
                }

                <input type="number" placeholder="Vencimiento de Tarjeta" {...register("vencimiento", {required: true})} />
                {
                    errors.vencimiento?.type === "required" && (
                        <p>Por favor ingrese el vencimiento de su tarjeta</p>
                    )
                }

                <input type="number" placeholder="Codigo de seguridad" {...register("codigo", {required: true})} />
                {
                    errors.codigo?.type === "required" && (
                        <p>Por favor ingrese el codigo de su tarjeta</p>
                    )
                }


                <button type="submit">Confirmar compra</button>

            </form>
        </div>
    )

}

export default Checkout;