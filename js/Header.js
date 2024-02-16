<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

export default function HeaderInfo(){
    return(
        <header>
            <img className="image-logo" src="../images/reactLogo.png"/>
            <ul className="nav-bar">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
};