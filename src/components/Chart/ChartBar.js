import './ChartBar.css'

const ChartBar = (props) => {

    let filledBar = '0%'

    if (props.max) {
        filledBar = Math.round(props.total * 100 / props.max) + '%'
    }

    return (
        <div>
            <div className="chart__bar">
                {/* <div className="chart__bar-outter"></div> */}
                <div className="chart__bar-inner" style={{ height: filledBar, backgroundColor: 'red' }}></div>
            </div>
            <div className='label'>{props.label}</div>
        </div>
    )
}

export default ChartBar