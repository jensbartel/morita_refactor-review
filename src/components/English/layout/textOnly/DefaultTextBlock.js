const DefaultTextBlock = (props) => {
    let text = props.text;

    return (
        <div className="defaultstyle">
            {text}<br /><br />
        </div>
    );
};

export default DefaultTextBlock;