import Navbar from "./Navigation";


const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-violet-300 z-50">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                
                <div className="flex items-center space-x-2 cursor-pointer">
                    <img
                        src="/logo2.png" 
                        alt="Artex designers Logo"
                        className="w-10 h-10 object-contain"
                    />
                    <h1 className="text-2xl font-bold text-blue-950">Motivana</h1>
                </div>

                

                <Navbar />

            </div>
        </header>
    );
};

export default Header;
