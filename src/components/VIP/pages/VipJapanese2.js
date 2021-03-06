import '../styles/vip.css';
import Fade from 'react-reveal';

import FullwidthHorizontal from '../vipComponents/FullwidthHorizontal';
import HalfwidthHorizontal from '../vipComponents/HalfwidthHorizontal';
import FullwidthWithText from '../vipComponents/FullwidthWithText';
import InquiryJP from '../vipComponents/InquiryJP';

import group3 from '../../../assets/installation/group3.jpg';
import group4 from '../../../assets/installation/group4.jpg';
import group5 from '../../../assets/installation/group5.jpg';
import group6 from '../../../assets/installation/group6.jpg';

import {
    En1963JP,
    Monoui1963JP,
    Kanzan_shikkin1964JP,
    Ki_shikkin1964JP,
    Ki1963JP,
    Usobuku1963JP,
    En1969JP,
    Asa1970JP,
    Izumi1975JP,
    Sojo1969JP,
    Ki1995JP,
    Nin1975JP,
    Negai1986JP,
    Myo1964_1JP,
    Myo1964_2JP,
} from '../../../data/ImageConstants';
import { enVIPtextJP } from '../../../data/TextConstantsJP';
import HalfwidthHorizontalVariation from '../vipComponents/HalfwidthHorizontalVariation';

const VIPJapanese2 = () => {
    return (
        <>
            <div className="containerstyle" style={{ marginTop: '2rem' }}>
                <Fade>
                    <img src={group3} alt="" />
                </Fade>
            </div>

            <div className="nav-linkJP">
                <a href="vip">作品一覧 (1)</a>
                <a className="active-link" href="vip2">
                    作品一覧 (2)
                </a>
                <a href="../">展覧会概要</a>
            </div>

            <FullwidthWithText item={En1963JP} scale="75" text={enVIPtextJP} />
            <HalfwidthHorizontal
                item1={Monoui1963JP}
                item2={Kanzan_shikkin1964JP}
                scaleLeft={50}
                contentWidth={50}
            />
            <HalfwidthHorizontal
                item1={Ki_shikkin1964JP}
                item2={Ki1963JP}
                scaleLeft={50}
                contentWidth={57}
            />

            <div className="containerstyle notFirst">
                <Fade>
                    <img src={group4} className="fullwidthimagestyle" alt="" />
                </Fade>
            </div>

            <HalfwidthHorizontal
                item1={Usobuku1963JP}
                item2={En1969JP}
                scaleLeft={55}
                contentWidth={57}
            />
            <br />
            <br />
            <HalfwidthHorizontal
                item1={Izumi1975JP}
                item2={Asa1970JP}
                scaleLeft={45}
                contentWidth={54}
            />
            <br />
            <br />

            <div className="containerstyle notFirst">
                <Fade>
                    <img src={group5} className="fullwidthimagestyle" alt="" />
                </Fade>
            </div>

            <HalfwidthHorizontalVariation
                item1={Myo1964_1JP}
                item2={Myo1964_2JP}
            />
            <FullwidthHorizontal item={Sojo1969JP} scale="60" />

            <div className="containerstyle notFirst">
                <Fade>
                    <img src={group6} className="fullwidthimagestyle" alt="" />
                </Fade>
            </div>

            <FullwidthHorizontal item={Ki1995JP} scale="60" />
            <HalfwidthHorizontal
                item1={Nin1975JP}
                item2={Negai1986JP}
                scaleLeft={38}
                contentWidth={60}
            />

            <InquiryJP />

            <a href="/vip" className="nextJp">
                <h2>前のページ</h2>
            </a>
        </>
    );
};

export default VIPJapanese2;
