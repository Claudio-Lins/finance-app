import { useState } from "react";

export default function Data({props}) {

  let dataAtual = new Date();
  let ano = dataAtual.getFullYear();
  let mes = dataAtual.getMonth() + 1;

  const [dateView, setDateView] = useState({
      ano,
      mes
  })

}