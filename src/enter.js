import React,{Component} from 'react';
class Enter extends Component {
    state = {  
        sentences:[],
        sentence:{
            line:'hello world',
            sno:1,
        }
    }
    componentDidMount(){
        this.fetchitems();
    }
    delete=()=>{
        fetch(`https://my-note-app1.herokuapp.com/delete?n=${this.state.sentence.sno}`)
        .then(this.fetchitems)
        .catch((er)=>{console.log(er,'blabla')})
    }
    addnote=()=>{
        fetch(`https://my-note-app1.herokuapp.com/insert?s=${this.state.sentence.line}`)
        .then(this.fetchitems)
        .catch((er)=>{console.log(er,'anything')})
    }
    renderproducts=(a)=><li key={a.sno} className="list-group-item d-flex justify-content-between align-items-center">{a.sentence}
    <span key={a.sno} className="badge badge-primary badge-pill">{a.sno}</span>
    </li>
    fetchitems=()=>{
        fetch('https://my-note-app1.herokuapp.com/')
        .then(response=>{console.log(response,'response'); 
        return response.json()})
        .then((response)=>this.setState({sentences:response.data}))
        .catch(er=>console.error(er))
    }
    render() { 
        const { sentences, sentence } = this.state
        return (
            <center>
            <div>
            <label htmlFor="inputPassword5">Write your note here</label>
            <input placeholder="Write here" onChange={e=>this.setState({sentence:{...sentence,line:e.target.value}})} type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
            <small id="passwordHelpBlock" className="form-text text-muted">
            Your note must be 20-40 characters long, contain letters and numbers, special characters, or emoji.
            </small> <br></br>
            <button type="button" onClick={this.addnote} className="btn btn-primary" >Submit</button><br></br><br></br>
            <hr></hr>
            <h4>Enter the serial number of note to delete</h4>
            <input onChange={e=>this.setState({sentence:{...sentence,sno:e.target.value}})} type='number'/><br></br>
            <br></br>
            <button type="button" onClick={this.delete} className="btn btn-primary" >Delete</button><br></br><hr></hr>
            <br></br>
            <ul className="list-group">
            {/* {console.log(sentences,'these sentencesssssss')}  */}
            {sentences.length && sentences.map((s,i) => <span key={i}> {s.sno + ":   "}
                <li key={s.sno} value={s.sentence}>{s.sentence}</li>

            </span>
                
                )}
            
            </ul>
            </div>
            </center>
       );
    }
}
// { sentences.map()}
export default Enter;