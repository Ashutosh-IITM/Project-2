const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const handleQuestion = async (req, res) => {
  const question = req.body.question;
  const file = req.file;

  try {
    const formData = new FormData();
    formData.append('question', question);
    if (file) {
      formData.append('file', fs.createReadStream(file.path));
    }

    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: question,
      max_tokens: 100,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.CHATGPT_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const answer = response.data.choices[0].text.trim();
    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  } finally {
    if (file) {
      fs.unlinkSync(file.path); // Clean up the uploaded file
    }
  }
};

module.exports = { handleQuestion };
