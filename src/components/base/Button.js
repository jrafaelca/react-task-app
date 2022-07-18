import classNames from "classnames";

function Button({children, type, onClick}) {
    return (
        <button
            className={classNames(
                'px-4 py-1.5 text-sm font-semibold rounded transition ease-in duration-100',
                {
                    'text-gray-700 bg-gray-100 hover:bg-gray-200': !type,
                    'text-white bg-blue-500 hover:bg-blue-600': type === 'primary',
                    'text-white bg-green-500 hover:bg-green-600': type === 'success',
                    'text-white bg-red-500 hover:bg-red-600': type === 'danger',
                }
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
