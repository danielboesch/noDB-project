import React, {Component} from 'react'

class Subscriptions extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }


    minusRating(id, val){
        let newNum = (val - 1)
        this.props.editRating(id, newNum)
        
    }
    plusRating(id, val){
        let newNum = (val + 1)
        this.props.editRating(id, newNum)
        
    }

    render(){

        
        
        let mappedSubs = this.props.subsArray.map((sub) => {
            return(
                <div>
                    {sub.image}
                    <br></br>
                    {sub.title}
                    <br></br>
                    <button onClick={() => this.minusRating(sub.id, sub.rating)}>-</button>
                    {" " + sub.rating + " " }
                    <button onClick={() => this.plusRating(sub.id, sub.rating)}>+</button>
                    <br></br>
                    <button onClick={() => this.props.unsubscribe(sub.id)}>Unsubscribe</button>
                </div>
            )
        })

        
        
        return(
            <div>
                <h1>Subscriptions</h1>
                    {mappedSubs}
            </div>
                
        )
    }

}

export default Subscriptions