export default function TextField({ error, name, onChange, label, type }) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="border-2 py-2 px-4 rounded-lg"
      />
      {!!error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
}
