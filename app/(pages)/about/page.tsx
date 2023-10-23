
export default function About() {
    return (
        <div className="h-">
            <h1>About</h1>
            <p>Created by <a href="https://jdeboi.com">Jenna deBoisblanc</a></p>
            <hr />
            <p>I wanted to try my hand at the <a href="https://everytownresearch.org/mass-shootings-in-america/">Everytown mass shootings visualization</a>. I found the matrix on incident counts a little difficult to understand. My primary critiques are:
            </p>
            <ul>
                <li>I don't know that an x/y plot, which typically is used to represent a relationship between an independent and dependent variable, is the most intuitive/ illuminating choice for killed & wounded victims</li>
                <li>The circle sizes don't give any context about the actual number of incidents</li>
            </ul>
            <p>My understanding of the objective of this visualization is to:</p>
            <ol>
                <li>Demonstrate how the change in the definition of mass shootings led to an increase number of incidents under consideration</li>
                <li>Get a sense of the most common mass shooting incidents and their composition- how many people are affected, and what is the likelihood they are wounded or killed?</li>
            </ol>
            <p>While the approach I took has drawbacks (aesthetically, it's too long for the page, and many of the incidents bars are very narrnow), I wonder if this direction might be worth considering if clarity is a primary objective.</p>
        </div>
    )
}
