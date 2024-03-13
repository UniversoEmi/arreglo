import mercadopago from "mercadopago";

export const createOrder = async (req, res) => {
    
    mercadopago.configure({
        access_token:"TEST-2186292951874492-031220-767876351f6deab6ab782d20c52b6347-1723419079",
    
    });
    
    const result = await mercadopago.preferences.create({
        items: [
            {
                title:"laptop",
                unit_price: 12.0,
                currency: "ARS",
                quantity: "1",
            }
        ]
    })

    console.log(result)

    res.send("creando orden");
    
};