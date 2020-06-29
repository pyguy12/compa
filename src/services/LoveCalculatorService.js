import axios from "axios";

const apiClient = axios.create({
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "love-calculator.p.rapidapi.com",
    "x-rapidapi-key": "b5fd906c52mshed64899b58afc52p1baae6jsnc76d3678d6b3",
    useQueryString: true,
  },
});

export default {
  calculateCompatibility(name1, name2) {
    return apiClient.get(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`
    );
  },
};
