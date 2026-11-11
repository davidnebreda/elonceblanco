import './HomeView.css'
import MainHeader from '../../components/MainHeader/MainHeader';
import MainHeaderMobile from '../../components/MainHeaderMobile/MainHeaderMobile';

function HomeView() {
    return (
        <>
            <div className="view_container">
                <div className="grid">
                    <div className="cell">
                        <MainHeader />
                        <MainHeaderMobile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeView;