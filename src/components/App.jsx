import react from 'react';
// eslint-disable-next-line
import reactdom from 'react-dom';
function App(){
    const now=new Date().toLocaleTimeString();
    const [time,setTime]=react.useState(now);
    function Now(){
        const abcd=new Date().toLocaleTimeString();
        setTime(abcd)

    }
    return (<div className='whole'>
        <container>
        <h1>{time}</h1>
        <button onClick={Now}>Time</button></container>
    </div>
    )
}
export default App;