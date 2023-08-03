# Pelias Data Ingestion POC Interface

## Description
This Proof of Concept UI is designed to evaluate the feasibility of the data ingestion flow for self-hosted Pelias. The main goal is to verify if we can successfully replicate the pelias/csv-importer functionality.The data ingestion process follows the following steps:

1. Form Interface Input: Users provide data through a form interface, which serves as the input for the data ingestion process.
2. Pelias Document Model: The data provided by users is transformed into the Pelias document model, ensuring compatibility with the Pelias indexing system.
3. ElasticSearch API POST/PUT Request: The transformed data is then sent as a POST or PUT request to the ElasticSearch API, which is responsible for indexing the data in the Pelias index.

Although we have achieved the successful ingestion of data into the Pelias index, it is important to note that it does not guarantee 100% searchability through the self-hosted Pelias API. There may be additional processes or configurations happening in the csv-importer under the hood to ensure optimal search functionality.

## Technologies Used
![Vue.js](https://img.shields.io/badge/Vue.js-42b883?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-2d79c7?style=for-the-badge&logo=typescript&logoColor=white)
![Bulma](https://img.shields.io/badge/Bulma-01d1b2d?style=for-the-badge&logo=bulma&logoColor=white)


## Installation
To run the project locally, please follow these steps:

1. Begin by cloning the repository to your local machine using the command: `https://github.com/coleenagsao/vue-ts-pelias-data-ingestion-poc.git`
2. Navigate to the "frontend" directory by running the command: `cd frontend`
3. Install the necessary dependencies by executing: `npm install`
4. Repeat the dependency installation process for the "backend" directory as well.
5. Start the development server by executing the command: `npm run dev` within the "backend" directory.
6. Begin the website by running the command: `npm run serve` within the "frontend" directory.
7. Ensure that your self-hosted Pelias instance is up and running on your local machine when adding data. 

Before proceeding with the installation, make sure you have the necessary prerequisites installed on your machine, including self-hosted Pelias, Vue, and TypeScript (TS). 

You can refer to the official Pelias Docker repository by clicking [here](https://github.com/pelias/docker). This repository provides detailed instructions and guidance on setting up and running Pelias locally on your machine.