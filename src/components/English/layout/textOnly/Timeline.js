import html from 'react-html-parser';

const Timeline = (props) => {
    const { data, title } = props

    return (
        <div className='timeline-container'>
            {title}<br /><br />
            {data.map((item) => (
                <div>
                    <div>{item.year}</div>
                    <div>{html(item.event)}</div>
                </div>
            ))}
        </div>
    )
};

export default Timeline;