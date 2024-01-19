import { components } from "../model/schema";
import { check } from "k6";
import http from "k6/http";
import * as ipaddr from 'ipaddr.js';

type IpResponse = components["schemas"]["IpResponse"]

export const getIp = (url: string) => {
  const params = {
    headers: {"content-type": "application/json"},
  };

  const res = http.get(`${url}/ip`, params);
  const jsonRes = res.json() as IpResponse;
  check(res, {
    "Get Todo response status 200": (r) => r.status === 200,
  });
  check(jsonRes,{
      "Get valid IPv4 address": (r) => ipaddr.isValid(r.origin)
  });

};

