import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../styles/entry.css"
export class Entry extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to the New Age</h2>
                <h2> of <span className="empathy">Empathy</span></h2>
                <form className="form cf">
                <section className="feeling cf"> 
                   <h3 className="question">How are you feeling today?</h3> 
                   <input type="radio" name="radio1" id="amazing" value="amazing"/>
                   <label className="four col" for="amazing">Amazing</label>
                    <input type="radio" name="radio1" id="good" value="good" />
                    <label className="four col" for="good">Good</label>
                    <input type="radio" name="radio1" id="okay" value="okay"/>
                    <label className="four col" for="okay">Okay</label>
                    <input type="radio" name="radio1" id="cbb" value="cbb"/>
                    <label className="four col" for="cbb">Could be Better</label>
                    </section>
                    <section className="reason cf">
                   <h3 className="question" >Why are you here?</h3> 
                   <input type="radio" name="radio2" id="to-learn" value="to-learn" />
                   <label className=" four col" for="to-learn">To Learn</label>
                   <input type="radio" name="radio2" id="to-engage" value="to-engage" />
                   <label className=" four col" for="to-engage">To Engage</label>
                   <input type="radio" name="radio2" id="to-share" value="to-share" />
                   <label className=" four col" for="to-share">To Share</label>
                   <input type="radio" name="radio2" id="to-explore" value="to-explore" />
                   <label className="four col" for="to-explore">To Explore</label>
                   </section>
                   <h3 className="question">Your Information*</h3>
                   <label className="question"></label>
                   <input type="text" name="user_name" className="info" placeholder="Name" required/>
                   <label className="question"></label>
                   <input type="number" className="info" name="user_age" placeholder="Age" required/>
                   <label className="question"></label>
                   <input type="text" name="user_text" className="info" placeholder="Job" required/>
                   <section className="group cf">
                   <h3 className="question">Video Chat</h3>
                   <input type="radio" name="radio3" id="one" value="one" required/>
                   <label className="four col" for="one">1-on-1 Discussion</label>
                   <input type="radio" name="radio3" id="small-group" value="small-group" required/>
                   <label className="four col" for="small-group">Small Group</label><br></br>
                   </section>
                   <button type="submit" className="btn sub">Submit</button>
                   <section/>
                </form>
            </div>
        )
    }
}

export default Entry
