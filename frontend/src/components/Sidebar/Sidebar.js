import pc from "./lether.jpeg"

import "./Sidebar.scss"

const Sidebar = (props) => {
    return <div className={`sidebar ${props.className}`}>
        <div className="sidebar__titleBox">
            <h2 className="sidebar__title">About me</h2>
        </div>

        <img src={pc} alt="" className="sidebar__image" />

        <p className="sidebar__paragraph .text-success">"This is exclusively for women" : this platform enable every women to start thier careers!!!.This platform help to accelerate your career journey.Join here to rise to grow together!!</p>
    </div>;
}

export default Sidebar;