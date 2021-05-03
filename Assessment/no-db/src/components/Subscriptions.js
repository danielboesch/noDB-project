import React, {Component} from 'react'

class Subscriptions extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }


    minusRating(id, val){
        let newNum = val.length - 1
        let stars = ""
        
       if(newNum === 1){
            stars = "★"
        }if(newNum === 2){
            stars = "★★"
        }if(newNum === 3){
            stars = "★★★"
        }if(newNum === 4){
            stars = "★★★★"
        }if(newNum === 5){
            stars = "★★★★★"
        }
        
        
        
        this.props.editRating(id, stars)
        
    }
    plusRating(id, val){
        let newNum = (val += ("★"))
        
        this.props.editRating(id, newNum)
        
    }

    render(){
        
        // console.log(this.props.subsArray)
        
        let mappedSubs = this.props.subsArray.map((sub) => {

                return(
                    <div className="mappedSubArr">
                    {sub.title}
                    <br></br>
                    <img className="mappedSubImg" alt={sub.title} src={sub.image}></img>
                    <br></br>
                    {console.log(sub.Stars)}

                    <button className="plusMinusButtons"  onClick={() => sub.rating.length - 1 > 0 && sub.rating.length - 1 <= 5 ? this.minusRating(sub.id, sub.rating) 
                        : console.log('error')}><b>⬇</b></button>

                    { sub.rating }

                    <button className="plusMinusButtons"  onClick={() => sub.rating.length - 1 >= 0 && sub.rating.length - 1 < 4 ? this.plusRating(sub.id, sub.rating) 
                        : console.log('error')}><b>⬆</b></button>

                    <br></br>
                    <br></br>
                    <button className="mappedSubButtons" onClick={() => this.props.unsubscribe(sub)}><b>Unsubscribe</b></button>
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