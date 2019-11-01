import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import "./main.scss";

const About = ({ data }) => {
  return (
    <Layout>
      <div className="blog-wrapper">
        <div className="blog-container">
          <section className="">
            <h2>Not quite Michelin stars but close</h2>
            <p>You've probably heard of the famous Michelin stars, which are awarded to the best (and very expensive) restaurants in the world.</p>
            <p>In 1997 Michelin created another category, which they called "Bib Gourmand" (<strong>Bib</strong>endum is the name of the Michelin Man).</p>
            <p>Singaporean restaurants and hawker stalls in this category have meals priced up to a maximum of SG$45 - and the Michelin inspectors still highly approve of the quality of the menu.</p>
            <p>When I found out about this, I wanted to go try these restaurants and hawker places. I found lists of them online, but being new to Singapore I didn't really know where the places were... and I didn't fancy looking them all up individually on the map to find one that was close to where I live.</p>
            <p>So I made a <Link to="/">Singapore Bib Gourmand map</Link>. Now it's easy to see all 58 eateries on a map.</p>
            <p>If you have any feedback or suggestions for changes, tweet me at <a href="http://twitter.com/aebar">aebaR</a>.</p>
            <p>And if you want more info straight from the horse's mouth, here's the <a href="https://guide.michelin.com/sg/en/article/news-and-views/michelin-guide-singapore-2019-bib-gourmand-selection">article on the Michelin website</a>.</p>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default About
