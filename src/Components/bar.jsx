import hamburgerLogo from "./img/icons8-hamburger-24.png";
import basketLogo from "./img/icons8-basket-24.png";
import exploreLogo from "./img/icons8-buffet-breakfast-24.png";
import cityLogo from "./img/icons8-city-24.png";

function Bar() {
    return (
        <section className="w-2/3 flex justify-between">
            <div>
                <img
                    src={cityLogo}
                    className="inline-block mr-2"
                    alt="building"></img>
                <select className="w-32">
                    <option>Bakı</option>
                    <option>Gəncə</option>
                    <option>Qəbələ</option>
                </select>
            </div>

            <div className="flex justify-between">
                <div className="cursor-pointer  hover:bg-sky-500 hover:rounded-2xl bg-sky-400 text-white hover:transition-all hover:text-white hover:duration-1000 bg-gray-200 mr-4 rounded-2xl p-2">
                    <img
                        src={exploreLogo}
                        className="inline-block mr-2 "
                        alt="explore"></img>
                    <a href="#" className="mr-12 ">
                        Kəşf et
                    </a>
                </div>
                <div className="hover:bg-sky-500 cursor-pointer hover:rounded-2xl  hover:transition-all hover:text-white hover:duration-1000 bg-gray-200 mr-4 rounded-2xl p-2">
                    <img
                        src={hamburgerLogo}
                        className="inline-block mr-2"
                        alt="hamburger"></img>
                    <a href="#" className="mr-12">
                        Restoranlar
                    </a>
                </div>
                <div className="hover:bg-sky-500 cursor-pointer hover:rounded-2xl  hover:transition-all hover:text-white hover:duration-1000 bg-gray-200 mr-4 rounded-2xl p-2">
                    <img
                        src={basketLogo}
                        className="inline-block mr-2"
                        alt="basket"></img>
                    <a href="#" className="mr-12">
                        Mağazalar
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Bar;
