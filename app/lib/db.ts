import {Redis} from "@upstash/redis";

export const db = new Redis({
    url: "https://apn1-logical-swan-34250.upstash.io",
    token:"AYXKASQgOGFiOWQwOWMtMDFlNS00NGI1LWFjNzktZGZmNWE5Y2ZmYzA5YTEzZGZjYTQ1MzcwNGYxZWEyYmFlNmViNzQ2NTNkNWQ=",
})