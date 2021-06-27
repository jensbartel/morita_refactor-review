import html from 'react-html-parser'

const TimelineJP = (props) => {
    const { data, title } = props

    return (
        <div className='timeline-containerJP'>
            {title}<br/><br/>
            {data.map((item) => (
                <div>
                    <div>{item.year}</div>
                    <div>{html(item.event)}</div>
                </div>
            ))}
        </div>
    )
};

export default TimelineJP;
