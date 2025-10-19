import { navLinks } from "../constants";

const Navbar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo" />

                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label.label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <img src="/search.svg" alt="Search" />
                    <img src="/cart.svg" alt="Cart" />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
