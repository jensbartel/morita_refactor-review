import html from 'react-html-parser';

const Inquiry = () => {
    return (
        <>
            <div className='worklist-download'>
                <a href="http://exh.shibunkaku.co.jp/VIP_checklist-210108.pdf" download ><u>Download work list</u></a>
            </div>

            <div className='inquiry'>
                <strong>Contact for Inquiries: <span className='exInfoPhoneEN'>{html('<br />')}</span><a href="mailto:wanobi@shibunkaku.com"><u>wanobi@shibunkaku.com</u></a></strong>
            </div>
        </>
    )
};

export default Inquiry;