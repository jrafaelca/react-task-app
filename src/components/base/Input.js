function Input({label, name, type, value, placeholder, onChange}) {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="font-semibold block mb-2">
                {label}
            </label>

            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full px-4 py-2 rounded border border-gray-300 transition duration-100 ease-in-out focus:outline-none focus:border-blue-500"
            />
        </div>
    );
}

export default Input;
