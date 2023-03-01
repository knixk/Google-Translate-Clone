app.get("/translation", async (req, res) => {
  const { textToTranslate, outputLanguage, inputLanguage } = req.query;

  const encodedParams = new URLSearchParams();
  encodedParams.append("source", inputLanguage);
  encodedParams.append("target", outputLanguage);
  encodedParams.append("q", textToTranslate);

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST,
    },
    data: encodedParams,
  };

  axios
    .request(options)
    .then(function (response) {
      // const response = response.data.data.translations[0].translatedText;
      res.status(200).json(response.data.data.translations[0].translatedText);

      // setTranslatedText(response.data.data.translations[0].translatedText);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json({ message: error });
    });
});

// put this in the axios req

const { textToTranslate, outputLanguage, inputLanguage } = req.query;

// const encodedParams = new URLSearchParams();
// encodedParams.append("source", inputLanguage);
// encodedParams.append("target", outputLanguage);
// encodedParams.append("q", textToTranslate);

const options = {
  method: "POST",
  params: {
    source: inputLanguage,
    q: textToTranslate,
    target: outputLanguage,
  },

  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.RAPID_API_HOST,
  },
};

try {
  const response = await axios(
    "https://google-translate1.p.rapidapi.com/language/translate/v2",
    options
  );

  res.status(200).json(response.data.data.translations[0].translatedText);
} catch (err) {
  console.error(err);
  res.status(500).json({ message: err });
}
