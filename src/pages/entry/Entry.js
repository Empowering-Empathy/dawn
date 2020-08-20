import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../styles/entry.css"
export class Entry extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to the New Age</h2>
                <h2> of <span className="empathy">Empathy</span></h2>
                <form>
                   <h3 className="question">How are you feeling today?</h3> 
                   <label htmlFor="amazing"></label>
                   <input type="button" className="btn" id="amazing" name="amazing" value="Amazing"/>
                   <label htmlFor="good"></label>
                   <input type="button" className="btn" id="good" name="good" value="Good"/>
                   <label htmlFor="okay"></label>
                   <input type="button" className="btn" id="okay" name="okay" value="Okay"/>
                   <label htmlFor="could-be-better"></label>
                   <input type="button" className="btn" id="could-be-better" name="could-be-better" value="Could be Better"/>
                   <h3 className="question" >Why are you here?</h3> 
                   <label htmlFor="to-learn"></label>
                   <input type="button" className="btn" id="to-learn" name="to-learn" value="To Learn"/>
                   <label htmlFor="to-engage"></label>
                   <input type="button" className="btn" id="to-engage" name="to-engage" value="To Engage"/>
                   <label htmlFor="to-share"></label>
                   <input type="button" className="btn" id="to-share" name="to-share" value="To Share"/>
                   <label htmlFor="to-explore"></label>
                   <input type="button" className="btn" id="to-explore" name="to-explore" value="To Explore"/>
                   <h3 className="question">Your Information</h3>
                   <label className="question">Name</label>
                   <input type="text" name="user_name"/>
                   <label className="question">Age</label>
                   <input type="number" name="user_age"/>
                   <label className="question">Job</label>
                   <input type="text" name="user_text"/>
                   <h3 className="question">Video Chat</h3>
                   
                   <div><Link to="/1-on-1" className="btn">1 on 1 Discussion</Link>
                   <Link to="/small-group" className="btn">Small Group</Link></div>   
                   
                   <button type="submit" className="btn sub">Submit</button>
                </form>
            </div>
        )
    }
}

export default Entry
