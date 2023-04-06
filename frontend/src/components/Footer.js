import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <button className="btn btn-blue">Add</button>
            <div className="copyright">&copy; RAHERINOTOAVINA safidy</div>
            <div className="pagination">
                <button className="btn btn-warning">prev</button>
                <button className="btn btn-warning">next</button>
            </div>
        </footer>
    )
}

export default Footer;