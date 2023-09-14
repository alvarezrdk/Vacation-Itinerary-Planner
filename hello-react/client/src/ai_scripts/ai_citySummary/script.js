const { PromptTemplate } = require("langchain/prompts");
const { OpenAI } = require("langchain/llms/openai");
const { StructuredOutputParser } = require("langchain/output_parsers");
const inquirer = require("inquirer");
require("dotenv").config();

const cityDescriptions = {
  "New York": "The largest city in the United States, known for its iconic skyline and diverse culture.",
  "Denver": "The mile high city known for its think air, and great mountains.",
  "Chicago": "The windy city, known for its architecture, deep-dish pizza, and vibrant arts scene."
};

// Creates and stores a wrapper for the OpenAI package along with basic configuration
const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
  model: "gpt-3.5-turbo",
});
console.log({ model });

// With a `StructuredOutputParser` we can define a schema for the output.
const parser = StructuredOutputParser.fromNamesAndDescriptions({
  code: "Javascript code that answers the user's question",
  explanation: "detailed explanation of the example code provided",
});
const formatInstructions = parser.getFormatInstructions();

// Function to retrieve city descriptions from your data source.
function getCityDescription(cityName) {
  if (cityName in cityDescriptions) {
    return cityDescriptions[cityName];
  } else {
    return "City description not available for " + cityName;
  }
}

const promptFunc = async (cityName) => {
  try {
    // Retrieve the city description based on the provided city name.
    const cityDescription = getCityDescription(cityName);

    // Create a prompt template for generating a summary.
    const prompt = new PromptTemplate({
      template: "Generate a summary for {city_name}.",
      inputVariables: ["city_name"],
    });

    // Format the prompt with the city name and description.
    const promptInput = await prompt.format({
      city_name: cityName,
      city_description: cityDescription, // Include city description as an input variable
    });

    // Call the AI model with the formatted prompt.
    const res = await model.call(promptInput);

    // Parse and display the generated summary.
    console.log(await parser.parse(res));
  } catch (err) {
    console.error(err);
  }
};

const init = (parser, getCityDescription) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "cityName",
        message: "Enter a city name to generate a summary:",
      },
    ])
    .then((inquirerResponse) => {
      promptFunc(inquirerResponse.cityName);
    });
};

init(parser, getCityDescription); 