import './HomeView.css'
import MainHeader from '../../components/MainHeader/MainHeader';
import MainHeaderMobile from '../../components/MainHeaderMobile/MainHeaderMobile';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

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
                <div id="grid_main_content" className="grid">
                    <div className="cell">
                        <main className="main_content">
                            <VideoPlayer 
                                videoid="50LZL-1eXlU"
                                title="Video de ejemplo"
                                extracto="Este es un extracto del video de ejemplo."
                            />
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeView;