export default function SelecForm(props) {
  return (
    <div className="flex item-center justify-center mb-2">
      <label className="mr-2 font-semibold text-purple-700" htmlFor="">
        {props.label}
      </label>
      <select
        onChange={props.onChange}
        className=" inline-block text-center w-full p-1 rounded-md shadow"
        name={props.name}>
          <option value="">{props.tipolabel}</option>
          <option value={props.valorUm}>{props.tipoUm}</option>
          <option value={props.valorDois}>{props.tipoDois}</option>
          <option value={props.valortres}>{props.tipoTres}</option>
        </select>
    </div>
  );
}
