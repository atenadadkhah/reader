import './widget-card.scss'

const Widget = ({widgetTitle, children, ...otherPops}) => {
    return (
        <div dir='rtl' className="widget" {...otherPops}>
            <h4 className="widget-title"><span>{widgetTitle}</span></h4>
            {children}
        </div>
    )
}

export default Widget;