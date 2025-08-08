const getTime = (initialMinutes)=>{
    if(typeof window  !== "undefined"){
        const localTime = localStorage.getItem("startTime");
        if(localTime){
            const startTime = new Date(JSON.parse(localTime));
            const currentTime = new Date();
            const minutesPassed = (currentTime-startTime)/(60000);
            console.log("minutes passed",minutesPassed);
            if(minutesPassed < initialMinutes ){
                return Math.ceil((initialMinutes-minutesPassed)*60);
            }
            else return 0;
        }
    }
    localStorage.setItem("startTime",JSON.stringify(new Date()))
    return initialMinutes*60;
}

export default getTime;