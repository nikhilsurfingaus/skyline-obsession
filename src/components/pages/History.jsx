import HistoryHero from "../HistoryUI/HistoryHero"
import ScrollToTop from "react-scroll-to-top";
import HistoryTimeline from "../HistoryUI/HistoryTimeline";
<hr className="glowing-hr" /> 

const History = () => {
  return (
    <div>
      <ScrollToTop smooth color="#1A64BA " />
      <HistoryHero />
      <hr className="glowing-hr" /> 
      <HistoryTimeline />
      <hr className="glowing-hr" /> 
    </div>
  )
}

export default History