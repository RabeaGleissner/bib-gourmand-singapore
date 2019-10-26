import React from "react"

import './more-info.scss'

const MoreInfo = ({ closeMoreInfo }) => {
  return (
    <section className="more-info-component-container">
      <div className="more-info-component">
        <button onClick={closeMoreInfo}>
          <div className="more-info-close-button">
            <p className="more-info-close-button-link">x Close</p>
          </div>
        </button>
        <h3>Not quite Michelin stars but close!</h3>
        <p>You've probably heard of the famous Michelin stars, which are awarded to the best (and very expensive) restaurants in the world.</p>
        <p>In 1997 Michelin created another category, which they called "Bib Gourmand" (<strong>Bib</strong>endum is the name of the Michelin Man).</p>
        <p>Singaporean restaurants and hawker stalls in this category have meals priced up to a maximum of SG$45 - and the Michelin inspectors still highly approve of the quality of the menu.</p>
        <p>When I found out about this, I found lists of these restaurants online, but being new to Singapore I didn't really know where the places were... and I didn't fancy looking them all up individually on the map.</p>
        <p>So here's a Singapore Bib Gourmand map! Now it's easy to see all 58 eateries on a map.</p>
        <p>If you have any feedback or suggestions for changes, tweet me at <a href="http://twitter.com/aebar">aebaR</a>.</p>
        <p><a href="https://guide.michelin.com/sg/en/article/news-and-views/michelin-guide-singapore-2019-bib-gourmand-selection">More info straight from the horse's mouth on the Michelin website.</a></p>
      </div>
    </section>
  )
};

export default MoreInfo;
