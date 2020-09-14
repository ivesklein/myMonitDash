
function str2b64(str){
    let buff = Buffer.from(str);
    return buff.toString('base64');
}

const getMonit = async function(url, user, pass) {

    const token = str2b64(`${user}:${pass}`)

    const res = await fetch(url, {headers:{
        "Authorization" : "Basic "+token
    }})
    const {status, statusText} = res

    if(status===401){
        console.log(statusText)
    }else{
        return await res.read()
        //console.log(res.status, res.statusText)
    }

}

exports = {
	getMonit
}