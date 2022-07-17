function Card({title, description, children}) {
    return (
        <div className="p-6 bg-white rounded shadow">
            {title &&
                <div className="font-semibold mb-2.5">
                    {title}
                </div>
            }

            {(description || children) &&
                <div className="text-sm text-gray-500">
                    {description}
                    {children}
                </div>
            }
        </div>
    );
}

export default Card;
