import React from "react";

const Footer = ({setModale, setFood}) => {
    return (
        <footer className="footer">
            <button className="btn btn-blue" onClick={() => {
                    setFood(null)
                    setModale(true)
                }
            }>Add</button>
            <div className="copyright">&copy; RAHERINOTOAVINA safidy</div>
        </footer>
    )
}

export default Footer;