const colors = [
  { name: 'Red', color: 'bg-red-500', bgColor: 'red' },
  { name: 'Green', color: 'bg-green-500', bgColor: 'green' },
  { name: 'Blue', color: 'bg-blue-500', bgColor: 'blue' },
  { name: 'Olive', color: 'bg-yellow-700', bgColor: '#808000' },
  { name: 'Gray', color: 'bg-gray-500', bgColor: 'gray' },
  { name: 'Yellow', color: 'bg-yellow-400', bgColor: 'yellow' },
  { name: 'Pink', color: 'bg-pink-300', bgColor: 'pink' },
  { name: 'Purple', color: 'bg-purple-600', bgColor: 'purple' },
  { name: 'Lavender', color: 'bg-purple-200', bgColor: 'lavender' },
  { name: 'White', color: 'bg-white border border-gray-300 text-gray-800', bgColor: 'white' },
  { name: 'Black', color: 'bg-black', bgColor: 'black' },
];

function Nav(){
    
    const handleclick = (color) => document.body.style.backgroundColor = color;
    return (
        <footer className="flex justify-center bg-olive-800 py-4">
            <div className="flex gap-2 p-2 rounded-full bg-white shadow-md">
                {colors.map((item, index) => (
                    <button 
                        onClick={() => handleclick(item.bgColor)}
                        key={index}
                        className={`flex items-center justify-center w-16 h-8 rounded-full ${item.color} text-white text-sm font-semibold shadow`}
                    >
                        {item.name}
                    </button>
                    
                ))}
            </div>
        </footer>
    
    );
}

export default Nav
