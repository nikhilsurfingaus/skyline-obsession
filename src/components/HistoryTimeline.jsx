import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './HistoryTimeline.css'

const HistoryTimeline = () => {
  return (
    <div style={{ height: '100%', background: 'black' }}>
      <div className="head d-flex justify-content-center">
        <h1 className="md-text-4xl sm-text-3xl text-2xl font-weight-bold py-5 head" style={{ fontSize: '3rem' }}>Reverse Gear</h1>
      </div>
      <div className="time">
      <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1A64BA', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(27, 153, 188)' }}
                date="2016"
                iconStyle={{ background: 'rgb(233 105 243)', color: '#fff' }}
                icon={<i className="ico ri-plant-fill"/>}
            >
                <h3 className="vertical-timeline-element-title">Learnt Visual Basic</h3>
                <h4 className="vertical-timeline-element-subtitle">Mackillop College 2016-17</h4>
                <p>
                Visual Basic is a high-level programming language developed by Microsoft for creating Windows applications with a graphical user interface.                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1A64BA', borderRadius: "20px", 
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" ,color: '#fff' }}                date="2018"
                iconStyle={{ background: 'rgb(227 0 255)', color: '#fff' }}
                icon={<i className="ico ri-gallery-line"/>}
            >
                <h3 className="vertical-timeline-element-title">Learnt Python</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Queensland 2018</h4>
                <p>
                Python is a high-level, interpreted programming language that emphasizes code readability, with a design philosophy that emphasizes code readability and simplicity.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default HistoryTimeline;
