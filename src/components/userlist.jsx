export const List = ({ name, email, tel, handleDelete , handleEdit}) => {
  return (
    <>
      <div
        className="group flex flex-col gap-4 p-6
                border border-sky-200 rounded-2xl
                bg-sky-50
                shadow-sm
                hover:shadow-lg hover:border-sky-300
                transition-all duration-200"
      >
        {/* User info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <p className="font-semibold text-gray-900 truncate">{name}</p>

          <p className="text-gray-600 text-sm truncate">{email}</p>

          <p className="text-gray-600 text-sm truncate">{tel}</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button 
          
            className="px-4 py-1.5 rounded-lg
               text-sm font-medium
               text-amber-700
               bg-amber-50
               border border-amber-700
               hover:bg-amber-100
               transition"
          >
            Edit
          </button>

          <button
           onClick={() => handleDelete(name)}
            className="px-4 py-1.5 rounded-lg
               text-sm font-medium
               text-red-700
               bg-red-50
               border border-red-700
               hover:bg-red-100
               transition"

              
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
