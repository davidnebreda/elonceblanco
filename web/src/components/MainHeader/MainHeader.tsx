import './MainHeader.css';
import mainMenu from '../../data/mainmenu';

function MainHeader() {
    const titulo_web = "El once blanco";

    return (
        <>
            <div className="main_header is-flex-desktop is-hidden-touch is-flex-direction-row is-justify-content-space-around is-align-items-center pl-3 pr-3 has-background-dark is-gap-3">
                <div className="is-flex is-flex-direction-row is-align-items-center is-gap-2">
                    <h1 className="is-size-2-desktop has-text-light">⚽&nbsp;{titulo_web}</h1>
                </div>
                
                <div className="is-flex is-flex-direction-row is-align-items-center is-gap-3">
                    {mainMenu.map((item) => (
                        <a key={item.title} href={item.link} className="menuitem" target="_self">
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </>



    )
}

export default MainHeader;