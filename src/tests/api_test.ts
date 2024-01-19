import { Options } from "k6/options";
import { getIp } from "../scenario/get_ip";

export const options: Options = {
  scenarios: {
    login: {
      executor: 'constant-arrival-rate',
      rate: 10,
      timeUnit: '1s',
      preAllocatedVUs: 1, 
      maxVUs: 5,
      duration: '5s'
    },
  },
  thresholds: {
    'http_req_duration': ['p(95) < 50'],
  },
};

export default function () {
  const url = "https://httpbin.test.k6.io";
  getIp(url);
}
