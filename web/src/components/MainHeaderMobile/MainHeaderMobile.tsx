import './MainHeaderMobile.css'
import mainMenu from '../../data/mainmenu';

function MainHeaderMobile()
{
    const titulo_web = "El once blanco";
   return (
    <>
       <div className="toolbar_mobile is-flex-touch is-hidden-desktop is-flex-direction-column is-justify-content-center is-align-items-center">
          <header className="toolbar_mobile_header has-background-dark is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
            <h3 className="title is-size-3-touch has-text-light has-text-weight-bold">{titulo_web}</h3>
          </header>
          <ToolBarMobile />
       </div>
    </>
   )
}

function ToolBarMobile()
{
    return (
        <>
          <div className="toolbar_mobile_menu is-flex is-flex-direction-row is-justify-content-center is-align-items-center is-gap-2 py-3">
                    {mainMenu.map((item) => (
                        <a key={item.title} href={item.link} className="menuitem_mobile" target="_self" title={item.title}>
                            <i className={item.icon}></i>
                        </a>
                    ))}
          </div>
        </>
    )

}

export default MainHeaderMobile;