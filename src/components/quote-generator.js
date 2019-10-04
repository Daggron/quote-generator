import React ,{useState} from 'react';
import spidy from '../spidy.png';
import spidy2 from '../spidy2.png';


const QuoteGen = ()=>{

    //eslint-disable-next-line
    let [quote,setQuote] = useState(""); 
    let [view,setView] = useState(false);
    let [text,setText] = useState("");

   const  genQuote = async  e =>{
       let respo = await fetch('https://api.quotable.io/random');
       let data = await respo.json();

       setQuote(data);
       setView(true);
       setText(false);
    
    }

    const copy = (data)=>{
        let copyText = data;
        navigator.clipboard.writeText(copyText);
        setText("Copied to clipboard");

    }


    return(
        <div className="quote">
            <h3 style={{color:"white"}}>
               The Best Quote Machine
            </h3>
            <button onClick={genQuote}>
                Generate Quote
            </button>
            <div className="block">

                    
                    <h3 onClick={()=>copy(quote.content) }>
                        {
                            view? quote.content :"Generate some quote"
                        }
                    </h3>
                    <h4 className="Author">
                        {view ? ("~"+quote.author): ""}
                    </h4>
                    <br />
                    <br />
            </div>
            <h5 className="he">
                {text}
            </h5>
            <div className="quote-img">
                <img src={spidy} className="spidy" alt="spiderman" />
                <img src={spidy2} id="sidy" alt="spidy"/>
            </div>
        </div>
    )
}


export default QuoteGen;