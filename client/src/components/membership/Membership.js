import React from 'react'

function Membership() {
    return (
        <div>
            
        <div className="mempership">
            <div className="basic">
            <label htmlFor="basic">Basic</label>
            <input type="checkbox" id="basic" onClick={() => setMempership("basic")}/>
            </div>
            <div className="premium">
            <label htmlFor="premium">Premium</label>
            <input type="checkbox" id="premium" onClick={() => setMempership("premium")}/>
            </div>
            <div className="premium_plus">
            <label htmlFor="premium_plus">Premium plus</label>
            <input type="checkbox" id="premium_plus" onClick={() => setMempership("premium plus")}/>
            </div>
            </div>
        </div>
    )
}

export default Membership
