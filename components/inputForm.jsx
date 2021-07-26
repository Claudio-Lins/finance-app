export default function InputForm(props) {
  return (
    <div className="flex item-center justify-center mb-2">
      <label className="mr-2 font-semibold text-purple-700" htmlFor="valor">
        {props.label}
      </label>
      <input
        onChange={props.onChange}
        className=" inline-block text-center w-full p-1 rounded-md shadow"
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}
