const encode = (str: string, key?: number) => {
    let enc : number[] = [];
    let key1 = (Math.random() * 0xffffff) << 2;
    let data: number[] = [];

    for (let i = 0; i < str.length; i++) {
        const element = str.charCodeAt(i);
        data = [...data, element]
    }

    console.log(data)
    console.log(key)
    let final: string ='';
    //return data ^ key;
    data.forEach((v, i) => i === 0 ? final += v^ (key ?? key1): final += `-${v ^ (key ?? key1)}`)
    console.log(final)
    return final;   
}

const decode = (str: string, key: number) => {
    let res: string[] = [];
    let final: string = '';
    str.split('-').forEach((v, i) => {
        //@ts-ignore
        res.push(parseInt(v) ^ key)
    })
    res.forEach((v) => final += String.fromCharCode(v))
    console.log(final);
}

const genKey = () => (Math.random() * 0xffffff) << 2;
// test zone
let key = genKey();
let astr = encode('some data', key)
decode(astr, key)
