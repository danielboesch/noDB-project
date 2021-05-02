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
                    <img alt={sub.title} src={sub.image}></img>
                    <br></br>
                    {sub.title}
                    <br></br>
                    
                    <button onClick={() => sub.rating > 0 && sub.rating <= 5 ? this.minusRating(sub.id, sub.rating) 
                        : console.log('error')}>-</button>

                    { sub.rating === 1 ? sub.rating + " Star"  : sub.rating + " Stars" }

                    <button onClick={() => sub.rating >= 0 && sub.rating < 5 ? this.plusRating(sub.id, sub.rating) 
                        : console.log('error')}>+</button>

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