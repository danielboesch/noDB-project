import axios from 'axios';
import React, {Component} from 'react'
import Subscriptions from './Subscriptions'
import Genres from './Genres'



class PodcastList extends Component {
    constructor(props){
        super(props);
        this.state = {
            podArray: [],
            subsArray: [],
            filterArr: [],
            input: '',
        }
    }

    componentDidMount(){
        axios.get('/api/podcasts')
        .then((res) => {
            
            this.setState({podArray: res.data})
        })
        .catch((error) => {
            console.log(error)
        })

        axios.get('/api/subscriptions')
        .then((res) => {
            this.setState({subsArray: res.data})
        })
        .catch((error) => {
            console.log(error)
        })
    } 

    unsubscribe = (sub) => {
        axios.delete(`/api/podcasts/${sub.id}`)
        .then((res) => {

                    this.state.podArray.unshift(sub)
            


            this.setState({subsArray: res.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    subscribe = (image, title, rating, description) => {
        axios.post(`/api/podcasts/`, {image, title, rating, description})
        .then((res) => {


            for (let i = 0; i < this.state.podArray.length; i++ ){
                if (this.state.podArray[i].title === title){
                    this.state.podArray.splice(i, 1)
                }
            }
    
            this.setState({subsArray: res.data})
            
        })
        .catch((error) => {
            console.log(error)
        })
    }
    editRating = (id, rating) => {
        axios.put(`/api/subscriptions/${id}`, {rating})
        .then((res) => {
            this.setState({subsArray: res.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    filterGenre = (genre) => {
        
        this.setState({filterArr: this.state.podArray.filter(pod => {
            if(genre === 'reset'){
                return this.state.podArray
            } else return pod.description.toLowerCase() === genre
            }
        )})
    }

    handleClick = () => {
        let input = this.state.input

        this.setState({filterArr: this.state.podArray.filter(pod => {
            return pod.title.includes(input) || pod.description.includes(input) 
            }
        )})
        
    }




    render(){
        const podsList = this.state.filterArr.length ? this.state.filterArr : this.state.podArray
        let mappedPods = podsList.map((pod) => {
            return(
                <div>
                
                <div className="mappedPodArr">
                    <img alt={pod.title} src={pod.image}></img>

                    <div className="mappedPodArrTitleDesc">
                    <br></br>
                    <span className='podInfoBox'>
                    <span className='podTitle'>

                    {pod.title}
                        </span>
                        <br></br>
                        <span className='podDesc'>
                        <b>{pod.description}</b>
                        </span>
                        <br></br>
                        <span className='podSubButton'>
                        <button className="mappedPodButtons" onClick={() => this.subscribe(pod.image, pod.title, pod.rating, pod.description)}><b>Subscribe</b></button>
                        </span>
                    </span>
                    </div>
                    
                   
                </div>
                </div>
            )
        })

        console.log(this.state.podArray)
        return(
            <div>
                <div className="header headerInput">
                <input onChange={(e) => this.setState({input: e.target.value})}  placeholder='  Search...'></input>
                    <button onClick={() => this.handleClick()} >➤</button>
                </div>
                <section className="outerBox">
                    <section className="genres">
                        <Genres 
                        genrePodArray={this.state.podArray} 
                        filterArray={this.filterGenre}
                        />
                    </section>
                    <section className="podsBox">
                        <p className="podArr">{mappedPods}</p>
                    </section>
                    <section className="subsBox">
                        <Subscriptions 
                        unsubscribe={this.unsubscribe} 
                        subsArray={this.state.subsArray} 
                        editRating={this.editRating}
                        />
                        
                    </section>
                </section>
            </div>
        )
    }
}

export default PodcastList