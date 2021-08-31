//App.js
import Header from './Header';
import Box from './Box';
const App = () =>{
    return(
        <>    {/* syntactic sugar*/}
            <Header/>
            <div className="sumit">
                <Box/>
                <Box/>
                <Box/>
            </div>
        </>
    )
}

export default App;  {/**export that app  */}
