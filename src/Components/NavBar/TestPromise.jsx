import React from "react";

function TestPromise (){
    let promise = new Promise((resolve, reject ) =>{
        resolve("Todo ok")
    })

    return (
        <div>Promises</div>
    )
}

export default TestPromise