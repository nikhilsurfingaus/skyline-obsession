import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './HistoryTimeline.css'
import first from '../assets/video/first.mp4';
import second from '../assets/video/second.mp4';
import third from '../assets/video/third.mp4';
import fourth from '../assets/video/fourth.mp4';
import fifth from '../assets/video/fifth.mp4';
import sixth from '../assets/video/sixth.mp4';
import seventh from '../assets/video/seventh.mp4';
import eight from '../assets/video/eight.mp4';

const HistoryTimeline = () => {
  return (
    <div style={{ height: '100%', background: 'black', paddingBottom: '100px'}}>
      <div className="head d-flex justify-content-center">
        <h1 className="md-text-4xl sm-text-3xl text-2xl font-weight-bold py-5 head" style={{ fontSize: '3rem' }}>A Blast From The Past...</h1>
      </div>
      <div className="time">
      <VerticalTimeline>
      <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1957"
                iconStyle={{ background: 'rgb(26, 100, 186)', color: '#fff' }}
                icon={<div className='num'>一</div>}
              >
                {/* Top Half: Video */}
                <div className="video-container">
                  <video className="timeline-video" autoPlay loop muted>
                    <source src={first} type="video/mp4" />
                  </video>
                </div>

                {/* Bottom Half: Title and Text */}
                <div className="timeline-card-content">
                  <h3 className="vertical-timeline-element-title">Prince Skyline Deluxe (1957)</h3>
                  <p className='mt-2'>
                  The Skyline was available as either a four-door sedan or a five-door station wagon, and it featured a 1.5L GA-30 engine. It wasn't until 1964 that the first racing GT Skyline was introduced, still under the Prince Motors flag. 
                  </p>
                </div>
              </VerticalTimelineElement>
           
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1969"
                iconStyle={{ background: 'rgb(26, 100, 186)', color: '#fff' }}
                icon={<div className='num'>二</div>}
              >
                {/* Top Half: Video */}
                <div className="video-container">
                  <video className="timeline-video" autoPlay loop muted>
                    <source src={second} type="video/mp4" />
                  </video>
                </div>

                {/* Bottom Half: Title and Text */}
                <div className="timeline-card-content">
                  <h3 className="vertical-timeline-element-title">Skyline 2000 GTR (1969)</h3>
                  <p className='mt-2'>
                  Skyline finally became a Nissan in 1969, when the first performance-bred Skyline GT-R was unveiled at the Tokyo Motor Show. It was still a sedan, but it now boasted an inline six engine and 160 horsepower. The first-generation Nissan Skyline was available from 1969-1972.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1974"
                iconStyle={{ background: 'rgb(26, 100, 186)', color: '#fff' }}
                icon={<div className='num'>三</div>}
              >
                {/* Top Half: Video */}
                <div className="video-container">
                  <video className="timeline-video" autoPlay loop muted>
                    <source src={third} type="video/mp4" />
                  </video>
                </div>

                {/* Bottom Half: Title and Text */}
                <div className="timeline-card-content">
                  <h3 className="vertical-timeline-element-title">Nissan Skyline 2000GT (1974)</h3>
                  <p className='mt-2'>
                  From 1973 to 1977, the C110 generation Skyline was produced, known as the Kenmari thanks to the commercial with owners named Ken and Mary. It too had a GT-R version but only for 1973, which would make it the last GT-R branded Skyline until 1989.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1981"
                iconStyle={{ background: 'rgb(26, 100, 186)', color: '#fff' }}
                icon={<div className='num'>四</div>}
              >
                {/* Top Half: Video */}
                <div className="video-container">
                  <video className="timeline-video" autoPlay loop muted>
                    <source src={fourth} type="video/mp4" />
                  </video>
                </div>

                {/* Bottom Half: Title and Text */}
                <div className="timeline-card-content">
                  <h3 className="vertical-timeline-element-title">R30 Skyline (1981)</h3>
                  <p className='mt-2'>
                  The R30 was a successful and remarkably versatile design, available as a coupe, four-door sedan, five-door hatchback and a four-door wagon. The R30 was available in 26 variations, none of them really hinting at what the Skyline would one day become.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1986"
                iconStyle={{ background: 'rgb(26, 100, 186)', color: '#fff' }}
                icon={<div className='num'>五</div>}
              >
                {/* Top Half: Video */}
                <div className="video-container">
                  <video className="timeline-video" autoPlay loop muted>
                    <source src={fifth} type="video/mp4" />
                  </video>
                </div>

                {/* Bottom Half: Title and Text */}
                <div className="timeline-card-content">
                  <h3 className="vertical-timeline-element-title">R31 Skyline (1986) </h3>
                  <p className='mt-2'>
                  In 1986 Nissan introduced the R31. It was a little bigger and boxier than previous models, and was the first to get the famous "Red Top" Skyline FJ20 engine with red cam covers and the Nissan Induction Control System.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1989"
                iconStyle={{ background: 'rgb(26, 100, 186)', color: '#fff' }}
                icon={<div className='num'>六</div>}
              >
                {/* Top Half: Video */}
                <div className="video-container">
                  <video className="timeline-video" autoPlay loop muted>
                    <source src={sixth} type="video/mp4" />
                  </video>
                </div>

                {/* Bottom Half: Title and Text */}
                <div className="timeline-card-content">
                  <h3 className="vertical-timeline-element-title">R32 Skyline GT-R (1989)</h3>
                  <p className='mt-2'>
                  The Skyline had been through many phases, but it was in 1989 that the real precursor to the GT-R of today was introduced. The R32 Skyline GT-R had all-wheel drive and the famed Nissan RB26DETT inline six engine that pumped out 280 horsepower. It still wasn't sold in America, but the JDM model was and still is a legend in the American tuner community.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1995"
                iconStyle={{ background: 'rgb(26, 100, 186)', color: '#fff' }}
                icon={<div className='num'>七</div>}
              >
                {/* Top Half: Video */}
                <div className="video-container">
                  <video className="timeline-video" autoPlay loop muted>
                    <source src={seventh} type="video/mp4" />
                  </video>
                </div>

                {/* Bottom Half: Title and Text */}
                <div className="timeline-card-content">
                  <h3 className="vertical-timeline-element-title">R33 Skyline GT-R (1995)</h3>
                  <p className='mt-2'>
                  The R33 Skyline GT-R was finally launched to the public in January 1995 again with the famed RB26DETT. In its evolution from the R32, the R33 Skyline GT-R became a faster, more stable car thanks to highly improved body stiffness, better weight distribution and optimized traction control provided by the new all-wheel drive system.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1998"
                iconStyle={{ background: 'rgb(26, 100, 186)', color: '#fff' }}
                icon={<div className='num'>八</div>}
              >
                {/* Top Half: Video */}
                <div className="video-container">
                  <video className="timeline-video" autoPlay loop muted>
                    <source src={eight} type="video/mp4" />
                  </video>
                </div>

                {/* Bottom Half: Title and Text */}
                <div className="timeline-card-content">
                  <h3 className="vertical-timeline-element-title">R34 Skyline GT-R (1998)</h3>
                  <p className='mt-2'>
                  The R34 Skyline GT-R was introduced in 1998, and was available from 1998 to 2002. A technologically advanced display unit set the model apart, while it's RB26DETT twin-turbo I6 engine produced impressive horsepower. The shorter wheelbase and more streamlined body of the R34 helped it to achieve even higher performance than its predecessors.
                  </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(26, 100, 186)', color: '#fff' }}
                icon={<div className='num'>九</div>}
                date="Nissan GTR R35 (2008)"
                className='final'
            />
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default HistoryTimeline;
