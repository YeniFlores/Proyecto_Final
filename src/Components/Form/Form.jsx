import React, { useState } from "react";
import { createBuyOrder } from "../../Service/firebase";
import { useNavigate } from "react-router-dom";

import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";

import Input from "./Input";

export default function UserForm({ cart,getPriceTotal  }) {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const orderData = {
      buyerData: userData,
      cart: cart,
      total: getPriceTotal(),
      date: new Date(),
    };

    
    createBuyOrder (orderData).then (respuesta => {
        Swal.fire({
            title: 'Has finalizado tu compra con exito!',
            text: 'Gracias por confiar en nosotros',
            icon: 'exit',
            confirmButtonText: 'Ok'
          }). then (result =>{
                navigate("/");
          })

});

  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        value={userData.name}
        title="Nombre"
        name="name"
        required={true}
        onChange={onInputChange}
      />
      <Input
        value={userData.email}
        title="Email"
        name="email"
        required={true}
        onChange={onInputChange}
      />
      <Input
        value={userData.phone}
        title="Teléfono"
        name="phone"
        onChange={onInputChange}
      />
      <button type="submit">Finalizar Compra</button>
    </form>
  );
}