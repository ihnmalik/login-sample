import React from 'react';

class Nurse extends React.Component{

    render(){
        return(
            <div>
                <form>
                   firstName: <input type = "text" name = "fname"></input>
                    lastName: <input type = "text" name = "lname"></input>
                </form>
            </div>
        )
    }
}

export default Nurse;