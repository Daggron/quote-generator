import React ,{useState} from 'react';


const QuoteGen = ()=>{

    //eslint-disable-next-line
    let [quote,setQuote] = useState(""); 
    let [view,setView] = useState(false);

   const  genQuote = async  e =>{
       let respo = await fetch('https://api.quotable.io/random');
       let data = await respo.json();

       

       setQuote(data);
       setView(true);
       console.log(data);
       

    }


    return(
        <div>
            <h3>
                This is a  random quote
            </h3>
            <button onClick={genQuote}>
                Generate Quote
            </button>
            <h3>
                {
                    view? quote.content :"Generate some quote"
                }
            </h3>
        </div>
    )
}


export default QuoteGen;