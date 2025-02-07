const encode = (str: string, key?: number) => {
    let enc : number[] = [];
    let key1 = key ?? (Math.random() * 0xffffff) << 2;
    let data: number[] = [];

    for (let i = 0; i < str.length; i++) {
        const element = str.charCodeAt(i);
        data = [...data, element]
    }

    let hash = (val) => val ^ key1;

    console.log(data)
    console.log(key)
    let final: string ='';
    //return data ^ key;
    data.forEach((v, i) => i === 0 
        ? final += hash(v)
        : final += `-${hash(v)}`)

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

const genKey = () => {
    let a = ((Math.random() * 0xDA) << 0xf) >>> 0x1
    let b = (((Math.random() * 0xfff) << 0x13) >> a)
    let c = (((Math.random() * b) << 0x92A) >> b)
    return c < 0 ? ~c : c
};


for(let i = 0; i < 16; i++) {
    console.log(genKey())
}

let key = genKey();
let astr = encode('some data', key)
decode(astr, key)
