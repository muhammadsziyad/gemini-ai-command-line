import { GoogleGenerativeAI } from "@google/generative-ai";


async function run(argv){
    const genAI = new GoogleGenerativeAI(argv[2])
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent(argv[3]);
    console.log(result.response.text())
} 

const argv = process.argv;
if (argv.length <=2){
    console.log("Please use this command : ./apps [YOUR-API-KEY] \"Your Question\" ")
}else{
    run(argv)
}

