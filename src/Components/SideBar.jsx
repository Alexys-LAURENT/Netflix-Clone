import '../css/SideBar.css'

function SideBar({ setSideBar }) {
    return (
        <div className='Sidebar' onBlur={() => setSideBar(false)}>
            <h1>Side Bar</h1>
        </div>
    );
}

export default SideBar;