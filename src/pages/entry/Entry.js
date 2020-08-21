import React from 'react'
import "../../styles/entry.css"

//import DataApiService from '../../services/data-api-service'
const query = `
  query {
      User{
        radio1
        radio2
        user_name
        user_age
        user_position
        radio3
    }
  }
`;


function Entry() { 
  function  handleForm (event) {
        event.preventDefault();
       // const { radio1, radio2, user_name, user_age, user_position, radio3 } = event.target
        
        var url = "https://localhost:8080/v1/graphql";
        var opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
        };

        fetch(url, opts)
        .then(res => res.json())
        .then(console.log)
        .catch(console.error);
          
            /*DataApiService.postGroupData({
                radio1: Number(radio1.value),
                radio2: Number(radio2.value),
                user_name: user_name.value,
                user_age: user_age.value,
                user_position: user_position.value,
                radio3: Number(radio3.value),
            })
                .then(data => {  
                    radio1.value=" "
                    radio2.value=" "
                    user_name.value=" "
                    user_age.value=" "
                    user_position=" "
                    radio3.value=" "
                    
                })
                .catch(res => {
                    this.setState({
                        error: res.error
                    })
                })
            */
    }

    
        
        return (
            <div>
                <h2>Welcome to the New Age</h2>
                <h2> of <span className="empathy">Empathy</span></h2>
                <form className="form cf" onSubmit={handleForm}>
                <section className="feeling cf"> 
                   <h3 className="question">How are you feeling today?</h3> 
                   <input type="radio" name="radio1" id="amazing" value="1"/>
                   <label className="four col" htmlFor="amazing">Amazing</label>
                    <input type="radio" name="radio1" id="good" value="2" />
                    <label className="four col" htmlFor="good">Good</label>
                    <input type="radio" name="radio1" id="okay" value="3"/>
                    <label className="four col" htmlFor="okay">Okay</label>
                    <input type="radio" name="radio1" id="cbb" value="4"/>
                    <label className="four col" htmlFor="cbb">Could be Better</label>
                    </section>
                    <section className="reason cf">
                   <h3 className="question" >Why are you here?</h3> 
                   <input type="radio" name="radio2" id="to-learn" value="1" />
                   <label className=" four col" htmlFor="to-learn">To Learn</label>
                   <input type="radio" name="radio2" id="to-engage" value="2" />
                   <label className=" four col" htmlFor="to-engage">To Engage</label>
                   <input type="radio" name="radio2" id="to-share" value="3" />
                   <label className=" four col" htmlFor="to-share">To Share</label>
                   <input type="radio" name="radio2" id="to-explore" value="4" />
                   <label className="four col" htmlFor="to-explore">To Explore</label>
                   </section>
                   <h3 className="question">Your Information*</h3>
                   <label className="question"></label>
                   <input type="text" name="user_name" className="info" placeholder="Name" required/>
                   <label className="question"></label>
                   <select name='user_age' id='age' required>
                            <option id='age'>find your age</option>
                            <option id='age' value='15-25'>15-25 years old</option>
                            <option id='age' value='26-35'>26-35 years old</option>
                            <option id='age' value='36-45'>36-45 years old</option>
                            <option id='age' value='46-55'>46-55 years old</option>
                            <option id='age' value='above 56'>above 56 years old</option>
                    </select>
                   <label className="question"></label>
                   <input type="text" name="user_position" className="info" placeholder="Job" required/>
                   <section className="group cf">
                   <h3 className="question">Video Chat</h3>
                   <input type="radio" name="radio3" id="one" value="1" required/>
                   <label className="four col" htmlFor="one">1-on-1 Discussion</label>
                   <input type="radio" name="radio3" id="small-group" value="2" required/>
                   <label className="four col" htmlFor="small-group">Small Group</label><br></br>
                   </section>
                   <button type="submit" className="btn sub">Submit</button>
                   <section/>
                </form>
            </div>
        )
    
}

export default Entry
