import './MainHeaderMobile.css'

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
                    <a href="/" className="menuitem_mobile" target="_self" title="Inicio"><i className="fa fa-home"></i></a>
                    <a href="#" className="menuitem_mobile" target="_self" title="Vídeos"><i className="fa fa-youtube"></i></a>
                    <a href="#" className="menuitem_mobile" target="_self" title="Nosotros"><i className="fa fa-user"></i></a>
                    <a href="#" className="menuitem_mobile" target="_self" title="Contacto"><i className="fa fa-envelope"></i></a>
          </div>
        </>
    )

}

export default MainHeaderMobile;