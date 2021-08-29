require('dotenv').config()
import * as devSdk from '@line/lbd-sdk-js';

const BASE_URL = process.env.BASE_URL as string;
const SERVICE_API_KEY = process.env.SERVICE_API_KEY as string;
const SERVICE_API_SECRET = process.env.SERVICE_API_SECRET as string;

const httpClient = new devSdk.HttpClient(BASE_URL, SERVICE_API_KEY, SERVICE_API_SECRET)

const main = async () => {
  const result = await httpClient.transactionResult("EB8FDC692CB887A7CBA441F8AAB3CC756166A7F5A4D5C70FF12AAEB4292C5BCB")
  console.log(result)
}

main()

// SDKを使うとnonceやtimestampが不要（たぶん内部で勝手に生成されてセットされている）
// import dayjs from 'dayjs';
// function getNonce() {
//   const LENGTH = 8 //生成したい文字列の長さ
//   const SOURCE = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" //元になる文字
//   let result = ''
//   for(let i=0; i<LENGTH; i++){
//     result += SOURCE[Math.floor(Math.random() * SOURCE.length)];
//   }
//   return result
// }
// function getTimestamp() { // ms
//   return dayjs().valueOf()
// }
