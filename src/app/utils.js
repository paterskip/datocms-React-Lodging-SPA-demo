const { DATO_API_TOKEN } = process.env;
import queries from "./queries";

const doQuery = async q => {
  try {
    let res = await fetch("https://graphql.datocms.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${DATO_API_TOKEN}`
      },
      body: JSON.stringify({ query: q })
    }).then(res => res.json());

    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("QUERY ERROR" , error);
    console.log("for query" , q);
    throw error;
  }
};

export default { doQuery, queries };
