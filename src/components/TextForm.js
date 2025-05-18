// import React, {useState} from 'react'

// export default function TextForm(props) {
//     const handleUpClick = ()=>{
//         console.log("Uppercase clicked" + text);
//         const newText=text.toUpperCase();
//         setText(newText);
//     }
//     const handleOnChange=(event)=>{
//         console.log("On change");
//         //thru this we can write new value in the text box
//         setText(event.target.value)
//     }
//     const handleLowClick=()=>{
//         console.log("Lowercse clicked"+ text)
//         const lowText=text.toLowerCase();
//         setText(lowText);
//     }
//     const punctuation=(text)=>{
//         const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g;
//         const matches = text.match(punctuationRegex);
//         return matches ? matches.length : 0;
//     }
//     const copyText=(text)=>{
//         console.log('Text Copied')
//         var text=document.getElementById("myBox");
//         text.select();
//         text.setSelectionRange(0, 9999);
//         navigator.clipboard.writeText(text.value);
//     }
//     const [myStyle, setMyStyle]=useState({
//         color: 'white',
//         backgroundColor: 'black'
//     })
//     const [btntext, setBtnText]=useState("Dark Mode")
//     const toggleStyle=()=>{
//         if (myStyle.color === 'white'){
//             setMyStyle({
//                 color: 'black',
//                 backgroundColor: 'white'
//             })
//             setBtnText("Dark Mode")
//         }
//         else {
//             setMyStyle({
//                 color: 'white',
//                 backgroundColor: 'black'
//             })
//             setBtnText("Light Mode")
//         }
//     }

//     //text is a state variable and it is changed using settext
//     const [text, setText] = useState('Enter the text');
//     //setText('New Text');
//     return (
//         <>
            
//             <div className='container my-2' style={myStyle}>
//                 <h1>{props.heading}</h1>
//                 <p mx-2>TextUtils is a text analizer that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.</p>
//                 <div className="mb-3">
//                 <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
//                 </div>
//                 <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
//                 <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lowercase</button>
//                 <button className="btn btn-primary " onClick={copyText}>Copy</button>
//                 <button className="btn btn-primary mx-2" onClick={toggleStyle} type='button'>{btntext}</button>
//             </div>

//             {/* <div className="container my-2">
//                 <h2>Your Text Summary</h2>
//                 <p>{text.split(" ").length} words and {text.length} character.</p>
//                 <p>{text.split(" ").length * 0.008} minutes to read this.</p>
//                 <h2>Preview</h2>
//                 <p>{text}</p>
//             </div> */}

//             <div className="container my-2" style={myStyle}>
//                 <h2>Your Text Summary</h2>
//                 <table class="table">
//                 <thead>
//                     <tr>
//                     <th scope="col">Words</th>
//                     <th scope="col">Characters</th>
//                     <th scope="col">Punctuations</th>
//                     <th scope="col">Read Time(in mins)</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td scope="row">{text.split(" ").length}</td>
//                         <td>{text.length}</td>
//                         <td>{punctuation(text)}</td>
//                         <td>{text.split(" ").length*0.008}</td>
//                     </tr>
//                 </tbody>
//                 </table>
//                 <h4 my-5>Preview</h4>
//                 <p>{text}</p>
//             </div>

//         </>
//     )
// }
 

import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase clicked" + text);
        const newText=text.toUpperCase();
        setText(newText);
        props.showAlert(': Converted to UpperCase', 'success');
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        //thru this we can write new value in the text box
        setText(event.target.value)
    }
    const handleLowClick=()=>{
        console.log("Lowercse clicked"+ text)
        const lowText=text.toLowerCase();
        setText(lowText);
        props.showAlert(': Converted to LowerCase', 'success');
    }
    const punctuation=(text)=>{
        const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g;
        const matches = text.match(punctuationRegex);
        return matches ? matches.length : 0;
    }
    const copyText=(text)=>{
        console.log('Text Copied')
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert(': Copied to Clipboard', 'success');
    }
    
    //text is a state variable and it is changed using settext
    const [text, setText] = useState('Enter the text');
    //setText('New Text');
    return (
        <>
            
            <div className='container my-2' style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <p mx-2>TextUtils is a text analizer that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.</p>
                <div className="mb-3">
                <textarea className="form-control " style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}}  value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lowercase</button>
                <button className="btn btn-primary " onClick={copyText}>Copy</button>
            </div>

            {/* <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} character.</p>
                <p>{text.split(" ").length * 0.008} minutes to read this.</p>
                <h2>Preview</h2>
                <p>{text}</p> 
            </div> */}

            <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Your Text Summary</h2>
                <table class={`table table-${props.mode}`}>
                <thead>
                    <tr>
                    <th scope="col">Words</th>
                    <th scope="col">Characters</th>
                    <th scope="col">Punctuations</th>
                    <th scope="col">Read Time(in mins)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">{text.split(" ").length}</td>
                        <td>{text.length}</td>
                        <td>{punctuation(text)}</td>
                        <td>{text.split(" ").length*0.008}</td>
                    </tr>
                </tbody>
                </table>
                <h4 my-5>Preview</h4>
                <p>{text}</p>
            </div>

        </>
    )
}
 