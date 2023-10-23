import logo from '../../imagens/logo.svg';


function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Logo Alura Books triangular cor laranja com meio vazado na cor branca"></img>
            <p><strong>Alura</strong> Books</p>
        </div>
    )
}